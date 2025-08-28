import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TokenType } from 'generated/prisma';
import { MailService } from 'src/modules/libs/mail/mail.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { generateToken } from 'src/shared/utils/generate-token.utils';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class PasswordRecoveryService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly mailService: MailService,
  ) {}

  public async verify(token: string, newPassword: string) {
    const existingToken = await this.prismaService.token.findUnique({
      where: {
        token,
        type: TokenType.PASSWORD_RECOVERY,
      },
    });
    if (!existingToken) {
      throw new NotFoundException('Token not found!');
    }

    const hasExpired = new Date(existingToken.expiresIn) < new Date();

    if (hasExpired) {
      throw new BadRequestException('Token expired!');
    }

    await this.prismaService.user.update({
      where: { id: existingToken.userId },
      data: { password: await bcrypt.hash(newPassword, 10) },
    });

    await this.prismaService.token.delete({
      where: { id: existingToken.id, type: TokenType.PASSWORD_RECOVERY },
    });
    return true;
  }

  public async sendPasswordRecoveryToken(email: string) {
    console.log('sendPasswordRecoveryToken');

    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user) {
      throw new BadRequestException('User not found!');
    }
    const recoveryToken = await generateToken(
      this.prismaService,
      user,
      TokenType.PASSWORD_RECOVERY,
      true,
    );
    if (recoveryToken)
      await this.mailService.sendPasswordRecoveryToken(
        user.email,
        recoveryToken.token,
      );
    return true;
  }
}
