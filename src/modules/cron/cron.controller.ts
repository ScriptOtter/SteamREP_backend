import { Controller, Get, Logger } from '@nestjs/common';
import { CronService } from './cron.service';
import { Cron } from '@nestjs/schedule';

@Controller('cron')
export class CronController {
  constructor(private readonly cronService: CronService) {}
  private readonly logger = new Logger('🖥️     Cron Operation   🖥️  ');
  @Cron('1 * * * * *')
  public async clearPrisma() {
    console.log('Чистим бд');
    return this.cronService.clearPrisma();
  }
  @Cron('15 * * * * *')
  public async downloadCS2Demos() {
    this.logger.log('Searching new CS2 demos for users SteamRep.help');
    return this.cronService.downloadCS2Demos();
  }
}
