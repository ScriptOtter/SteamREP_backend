import { Module } from '@nestjs/common';
import { TrackingUsersService } from './tracking-users.service';
import { TrackingUsersController } from './tracking-users.controller';

@Module({
  controllers: [TrackingUsersController],
  providers: [TrackingUsersService],
})
export class TrackingUsersModule {}
