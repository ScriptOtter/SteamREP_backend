import { Module } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { VerificationController } from './verification.controller';

import { NotificationsService } from 'src/modules/notifications/notifications.service';

@Module({
  imports: [],
  controllers: [VerificationController],
  providers: [VerificationService, NotificationsService],
  exports: [VerificationService],
})
export class VerificationModule {}
