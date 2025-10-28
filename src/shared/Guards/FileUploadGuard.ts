import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FileUploadGuard implements CanActivate {
  constructor(private readonly prismaService: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const RULES = {
      MEMBER: 1,
      DONOR: 3,
      MODERATOR: 3,
      ADMIN: 3,
      CREATOR: 100,
    };

    const request = context.switchToHttp().getRequest<Request>();
    const refreshToken = request.cookies?.SteamREP_refreshToken;
    const user = await this.prismaService.user.findFirst({
      where: { jwtTokens: { some: { refreshToken } } },
      select: { additionalRole: true },
    });
    if (!user) throw new UnauthorizedException('User not found!');
    const files = request.files;
    console.log(user, files);
    if (!files) {
      return true;
    }

    const fileCount = Array.isArray(files) ? files.length : 1; // Проверяем количество файлов

    if (fileCount > RULES[user.additionalRole]) {
      throw new ForbiddenException(
        `You can upload more than ${RULES[user.additionalRole]} images`,
      );
    }

    return true; // Если все проверки пройдены, разрешаем доступ
  }
}
