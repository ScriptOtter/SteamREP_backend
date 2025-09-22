import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly prismaService: PrismaService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const refreshToken = request.cookies?.SteamREP_refreshToken;
    const userRoles = await this.prismaService.user.findFirst({
      where: { jwtTokens: { some: { refreshToken } } },
      select: { additionalRole: true },
    });

    return true;
  }
}
