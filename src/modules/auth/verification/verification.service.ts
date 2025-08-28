import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { TokenType, User, UserRole } from 'generated/prisma';
import { MailService } from 'src/modules/libs/mail/mail.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenService } from '../tokens/tokens.service';
import { ConfigService } from '@nestjs/config';
import { generateToken } from 'src/shared/utils/generate-token.utils';

@Injectable()
export class VerificationService {
  public constructor(
    private readonly prismaService: PrismaService,
    private tokens: TokenService,
    private configService: ConfigService,
    private readonly mailService: MailService,
  ) {}

  public async verify(res: Response, token: string) {
    const existingToken = await this.prismaService.token.findUnique({
      where: {
        token,
        type: TokenType.EMAIL_VERIFY,
      },
    });
    if (!existingToken) {
      throw new NotFoundException('Token not found!');
    }

    const hasExpired = new Date(existingToken.expiresIn) < new Date();

    if (hasExpired) {
      throw new BadRequestException('Token expired!');
    }

    const user = await this.prismaService.user.update({
      where: { id: existingToken.userId },
      data: { isEmailVerified: true, role: UserRole.ACTIVE },
    });
    await this.prismaService.token.delete({
      where: { id: existingToken.id, type: TokenType.EMAIL_VERIFY },
    });
    const { accessToken, refreshToken } = await this.tokens.getTokens(user.id);

    await this.prismaService.jwtToken.create({
      data: {
        userId: user.id,
        refreshToken: refreshToken,
      },
    });
    if (!this.tokens.sendTokens(res, user, accessToken, refreshToken)) {
      return;
    }
  }

  public async sendVerificationToken(user: User) {
    console.log('sendVerificationToken');
    const verificationToken = await generateToken(
      this.prismaService,
      user,
      TokenType.EMAIL_VERIFY,
      true,
    );
    if (verificationToken)
      await this.mailService.sendVerificationToken(
        user.email,
        verificationToken.token,
      );
    return true;
  }
}
