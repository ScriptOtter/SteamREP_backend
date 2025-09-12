import { Module } from '@nestjs/common';
import { PasswordRecoveryService } from './password-recovery.service';
import { PasswordRecoveryController } from './password-recovery.controller';
import { NotificationsService } from 'src/modules/notifications/notifications.service';

@Module({
  controllers: [PasswordRecoveryController],
  providers: [PasswordRecoveryService, NotificationsService],
})
export class PasswordRecoveryModule {}
