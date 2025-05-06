import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService, TokenExpiredError } from '@nestjs/jwt';
import { LoginDto } from './dto/login-user.dto';
import { RegisterDto } from './dto/register-user.dto';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokensDto } from './dto/tokens.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async getTokens(id: string): Promise<Partial<any>> {
    try {
      const accessToken = await this.jwtService.signAsync(
        { id },
        { secret: process.env.JWT_ACCESS_SECRET!, expiresIn: '15m' },
      );
      const refreshToken = await this.jwtService.signAsync(
        { id },
        { secret: process.env.JWT_REFRESH_SECRET!, expiresIn: '7d' },
      );
      return { accessToken, refreshToken };
    } catch (e) {
      console.log(e);
    }
    return {};
  }

  async registerUser(dto: RegisterDto): Promise<any> {
    if (dto.password !== dto.confirmPassword)
      throw new BadRequestException('Password do not match!');

    dto.email = dto.email.toLowerCase().trim();

    try {
      const hashedPassword = await bcrypt.hash(dto.password, 10);

      const user = await this.prisma.user.create({
        data: {
          username: dto.username,
          password: hashedPassword,
          email: dto.email,
        },
      });

      const { accessToken, refreshToken } = await this.getTokens(user.id);

      const userToken = await this.prisma.jwtToken.create({
        data: {
          userId: user.id,
          refreshToken: refreshToken,
        },
      });
      console.log({ user, accessToken, refreshToken });
      console.log(userToken);
      return { user, accessToken, refreshToken };
    } catch (e) {
      console.log(e);
    }
  }

  async loginUser(dto: LoginDto): Promise<any> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { username: dto.username },
      });
      if (!user) {
        throw new UnauthorizedException('Wrong password!');
      }
      const rightPassword = await bcrypt.compare(dto.password, user.password);
      if (!rightPassword) {
        throw new UnauthorizedException('Wrong password!');
      }
      const { accessToken, refreshToken } = await this.getTokens(user.id);

      return { user, accessToken, refreshToken };
    } catch (e) {
      console.log(e);
    }
  }

  async verifyToken(dto: TokensDto) {
    return;
  }
}
