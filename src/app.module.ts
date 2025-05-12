import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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
import { SteamModule } from './steam/steam.module';
import { CookieMiddleware } from './middleware/cookie.middleware';
import { ProtectedController } from './protected.controller';
import { AuthModule } from './auth/auth.module';
import { TokenService } from './auth/tokens/tokens.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
    }),
    PrismaModule,
    UserModule,
    CommentModule,
    SteamModule,
    AuthModule,
  ],
  controllers: [
    AppController,
    AuthController,
    UserController,
    ProtectedController,
  ],
  providers: [AppService, AuthService, TokenService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CookieMiddleware).forRoutes('asdas');
  }
}
