import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
    }),
    PrismaModule,
    UserModule,
    CommentModule,
  ],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, AuthService, UserService],
})
export class AppModule {}
