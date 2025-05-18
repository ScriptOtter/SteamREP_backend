import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TokenService } from 'src/auth/tokens/tokens.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, TokenService],
})
export class UserModule {}
