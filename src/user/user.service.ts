import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserSteamDto } from './dto/user-steam.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(id: string): Promise<any> {
    try {
      console.log(id);
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
    }
  }

  async changeUserId(dto: UserSteamDto): Promise<any> {
    const steamId = '12345678900';
    const { id } = dto;
    try {
      console.log(dto.id, steamId);

      const updateUserId = await this.prisma.user.update({
        where: { id },
        data: { id: steamId },
        select: {
          id: true,
          username: true,
          role: true,
        },
      });
      const updateAuthorIdComments = await this.prisma.comment.updateMany({
        where: { authorId: id },
        data: { authorId: steamId },
      });
      const updateRecipientIdComments = await this.prisma.comment.updateMany({
        where: { recipientId: id },
        data: { recipientId: steamId },
      });
      const updateUserJwtId = await this.prisma.jwtToken.updateMany({
        where: { userId: id },
        data: { userId: steamId },
      });
      if (
        !updateUserId ||
        !updateUserJwtId ||
        !updateAuthorIdComments ||
        !updateRecipientIdComments
      ) {
        throw new NotFoundException('User not found');
      }

      return updateUserId;
    } catch (e) {
      console.log(e);
    }
  }
}
