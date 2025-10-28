import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Request } from 'express';
import { SteamService } from '../steam/steam.service';
import { TokenService } from '../auth/tokens/tokens.service';
import { UploadService } from '../upload/upload.service';
import { GetCommenttDto } from './dto/get-comments.dto';
import { NotificationsService } from '../notifications/notifications.service';
import { messageTemplates } from '../notifications/templates/message';

const IMAGES_RULES = {
  MEMBER: 1,
  DONOR: 3,
  MODERATOR: 3,
  ADMIN: 3,
  CREATOR: 100,
};

const COMMENTS_RULES = {
  MEMBER: 1,
  DONOR: 3,
  MODERATOR: 3,
  ADMIN: 3,
  CREATOR: 100,
};

@Injectable()
export class CommentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly steamService: SteamService,
    private readonly tokenService: TokenService,
    private readonly S3: UploadService,
    private readonly NotificationsService: NotificationsService,
  ) {}

  async createComment(
    files: Express.Multer.File[],
    dto: CreateCommentDto,
    req: Request,
    id: string,
  ): Promise<any> {
    const userId = await this.tokenService.getIdFromToken(req);
    if (!userId) {
      throw new UnauthorizedException('User not found!');
    }

    const steamid = async (id: string): Promise<string> => {
      if (await this.steamService.checkIsSteam64Id(id)) {
        return id;
      } else {
        return await this.steamService.getSteam64Id(id);
      }
    };

    try {
      const userRole = await this.prisma.user.findFirst({
        where: { id: userId },
        select: { additionalRole: true },
      });
      if (!userRole) throw new UnauthorizedException('User not found!');

      const findComment = await this.prisma.comment.findMany({
        where: { authorId: userId, recipientId: await steamid(id) },
      });
      if (
        findComment &&
        findComment.length > COMMENTS_RULES[userRole.additionalRole]
      )
        throw new ForbiddenException(
          `Your role can only leave ${COMMENTS_RULES[userRole.additionalRole]} comment per user`,
        );
      const fileCount = Array.isArray(files) ? files.length : 0; // Проверяем количество файлов

      if (fileCount > IMAGES_RULES[userRole.additionalRole]) {
        throw new ForbiddenException(
          `You can upload more than ${IMAGES_RULES[userRole.additionalRole]} images`,
        );
      }
      const uploadedFiles = await this.S3.uploadFiles(files);

      if (!uploadedFiles) {
        throw new InternalServerErrorException('Failed to upload file!');
      }
      const comment = await this.prisma.comment.create({
        data: {
          content: dto.content,
          authorId: userId,
          recipientId: await steamid(id),
        },
      });
      if (!comment) {
        throw new BadRequestException('Comment is not created');
      }
      const imagePromises = uploadedFiles.map(async (image) => {
        return this.prisma.images.create({
          data: {
            commentId: comment.id,
            url: image, // Убедитесь, что это правильное поле для URL изображения
          },
        });
      });

      // Ждем завершения всех промисов
      await Promise.all(imagePromises);
      if (!imagePromises) {
        throw new BadRequestException('The images were not loaded');
      }

      console.log(comment);
      const user = await this.prisma.user.findFirst({
        where: { steamUser: { id: comment.recipientId } },
      });
      if (!user) return comment;

      await this.NotificationsService.createNotification(
        user.id,
        messageTemplates.newMessage,
      );
      return comment;
    } catch (e) {
      console.log('aasdasd', e);
      throw new BadRequestException(e);
    }
  }

  async getComments(steamid: string): Promise<any> {
    let id = this.steamService.checkIsSteam64Id(steamid);
    if (!id) {
      steamid = await this.steamService.getSteam64Id(steamid);
    }
    try {
      const existsUser = await this.prisma.steamUser.findUnique({
        where: { id: steamid },
      });
      if (!existsUser) {
        return {};
      }
      const comments = await this.prisma.comment.findMany({
        where: { recipientId: steamid },
        select: {
          recipientId: true,
          images: true,
          id: true,
          content: true,
          createdAt: true,
          updatedAt: true,
          author: {
            select: {
              role: true,
              username: true,
              avatar: true,
              steamUser: {
                select: { avatar: true, personaName: true, id: true },
              },
            },
          },
        },
        orderBy: { updatedAt: 'desc' },
      });
      return comments;
    } catch (e) {
      console.log(e);
      return {};
    }
  }

  async deleteComment(commentId, req) {
    const userId = await this.tokenService.getIdFromToken(req);

    try {
      const comment = await this.prisma.comment.delete({
        where: { id: commentId, authorId: userId },
        include: { images: true },
      });
      console.log(comment);

      if (!comment) {
        console.log('Not found comment!');
      }
      if (comment.images) {
        const imagePromises = comment.images.map(async (image) => {
          this.S3.deleteImageFromS3(image.url);
          return this.prisma.images.deleteMany({
            where: { id: image.id },
          });
        });

        await Promise.all(imagePromises);
      }
      const user = await this.prisma.user.findFirst({
        where: { steamUser: { id: comment.recipientId } },
        orderBy: { createdAt: 'desc' },
      });
      if (!user) return comment;

      await this.prisma.notifications.deleteMany({
        where: { userId: user.id, type: 'COMMENT' },
        limit: 1,
      });
      return comment;
    } catch (e) {
      console.log('DELETE_COMMENT', e);
    }
  }

  async updateComment(
    files: Express.Multer.File[],
    commentId: string,
    dto: GetCommenttDto,
    req: Request,
  ) {
    const userId = await this.tokenService.getIdFromToken(req);
    if (!userId) {
      throw new UnauthorizedException();
    }

    try {
      if (dto.deletedImages) {
        let curComment = await this.prisma.comment.findUnique({
          where: { id: commentId },
          include: { images: true },
        });
        if (!curComment) {
          throw new BadRequestException('Comment not found!');
        }
        const removeImages = curComment.images.filter((item) =>
          dto.deletedImages.includes(item.id),
        );

        if (removeImages) {
          const imagePromises = removeImages.map(async (image) => {
            this.S3.deleteImageFromS3(image.url);
            return this.prisma.images.deleteMany({
              where: { id: image.id },
            });
          });

          await Promise.all(imagePromises);
        }
      }
      const comment = await this.prisma.comment.update({
        where: { id: commentId },
        data: { content: dto.content },
      });
      if (!comment) {
        throw new BadRequestException('Comment not updated!');
      }
      const userRole = await this.prisma.user.findFirst({
        where: { id: userId },
        select: { additionalRole: true },
      });
      if (!userRole) throw new UnauthorizedException('User not found!');
      const fileCount = Array.isArray(files) ? files.length : 1; // Проверяем количество файлов
      const images = await this.prisma.images.findMany({
        where: { commentId },
      });

      if (fileCount + images.length > IMAGES_RULES[userRole.additionalRole]) {
        throw new ForbiddenException(
          `You can upload more than ${IMAGES_RULES[userRole.additionalRole]} images`,
        );
      }
      const uploadedFiles = await this.S3.uploadFiles(files);
      if (!uploadedFiles) {
        throw new InternalServerErrorException('Failed to upload file!');
      }

      const imagePromises = uploadedFiles.map(async (image) => {
        return this.prisma.images.create({
          data: {
            commentId: comment.id,
            url: image, // Убедитесь, что это правильное поле для URL изображения
          },
        });
      });

      // Ждем завершения всех промисов
      await Promise.all(imagePromises);
      if (!imagePromises) {
        throw new BadRequestException('The images were not loaded');
      }

      return true;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
