import { Controller, Get } from '@nestjs/common';
import { CronService } from './cron.service';
import { Cron } from '@nestjs/schedule';

@Controller('cron')
export class CronController {
  constructor(private readonly cronService: CronService) {}

  @Cron('1 * * * * *')
  public async clearPrisma() {
    console.log('Чистим бд');
    return this.cronService.clearPrisma();
  }
  @Cron('1 * * * * *')
  public async downloadCS2Demos() {
    console.log('Downloading...');
    return this.cronService.downloadCS2Demos();
  }
}
