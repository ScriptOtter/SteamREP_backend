import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenService } from 'src/auth/tokens/tokens.service';
import { Request } from 'express';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tokenService: TokenService,
  ) {}

  public async getUserProfile(id: string): Promise<any> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          createdAt: true,
          username: true,
          avatar: true,
          role: true,
        },
      });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  public async getMyData(req: Request): Promise<Partial<any>> {
    const userId = await this.tokenService.getIdFromToken(req);
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          createdAt: true,
          username: true,
          avatar: true,
          role: true,
          steamUser: {
            select: {
              avatar: true,
              personaName: true,
              id: true,
              countryCode: true,
            },
          },
        },
      });
      if (!user) {
        console.log(user);
        throw new UnauthorizedException();
      }
      //console.log(user);
      return user;
    } catch (e) {
      return e;
    }
  }
  public async getUserRole(id: string): Promise<any> {
    try {
      return await this.prisma.user.findUnique({
        where: { id: id },
        select: {
          role: true,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  public async getMeViaId(id: string): Promise<any> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id },
        select: {
          steamUser: {
            select: {
              avatar: true,
              id: true,
              personaName: true,
            },
          },
        },
      });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
