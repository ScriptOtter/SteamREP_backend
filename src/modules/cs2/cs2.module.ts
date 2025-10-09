import { Module } from '@nestjs/common';
import { Cs2Service } from './cs2.service';
import { Cs2Controller } from './cs2.controller';
import { TokenService } from '../auth/tokens/tokens.service';
import { GCService } from './steam-information/gc.service';

@Module({
  controllers: [Cs2Controller],
  providers: [Cs2Service, TokenService, GCService],
})
export class Cs2Module {}
