import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SteamVerificationGuard implements CanActivate {
  constructor(private readonly prismaService: PrismaService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const refreshToken = request.cookies?.SteamREP_refreshToken;
    const userRoles = await this.prismaService.user.findFirst({
      where: { jwtTokens: { some: { refreshToken } } },
      select: { role: true },
    });
    if (!userRoles)
      throw new BadRequestException('You need to link your Steam account.');
    const role = userRoles.role;
    if (role !== 'VERIFIED')
      throw new BadRequestException('You need to link your Steam account.');
    return true;
  }
}
