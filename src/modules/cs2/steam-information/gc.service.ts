import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Response } from 'express';

@Injectable()
export class GCService {
  constructor(private readonly configService: ConfigService) {}

  async getAccountInformation(steamid: string, res: Response) {
    const response = await axios.get(
      this.configService.getOrThrow<string>('CS2_GC_URL') +
        `/userdata/${steamid}`,
    );
    console.log(response.data);
    return res.json(response.data);
  }

  async getMatchInfoFromSharedCode(sharedCode: string, res: Response) {
    const response = await axios.get(
      this.configService.getOrThrow<string>('CS2_GC_URL') +
        `/matchdata/${sharedCode}`,
    );

    return response.data;
  }
}
