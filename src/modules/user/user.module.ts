import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TokenService } from '../auth/tokens/tokens.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, TokenService],
})
export class UserModule {}
