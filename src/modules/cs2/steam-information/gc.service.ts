import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Response } from 'express';

@Injectable()
export class GCService {
  constructor(private readonly configService: ConfigService) {}

  async getAccountInformation(steamid: string, res: Response) {
    const response = await axios.post(
      this.configService.getOrThrow<string>('STEAMREP_GC') +
        `/userdata/${steamid}`,
      { token: this.configService.getOrThrow<string>('STEAMREP_GC_TOKEN') },
      { withCredentials: true },
    );
    console.log(response.data);
    return res.json(response.data);
  }

  async getMatchInfoFromSharedCode(sharedCode: string) {
    try {
      const response = await axios.post(
        this.configService.getOrThrow<string>('STEAMREP_GC') +
          `/matchdata/${sharedCode}`,
        {
          token: this.configService.getOrThrow<string>('STEAMREP_GC_TOKEN'),
          match: Math.random(),
        },
        {
          withCredentials: true,
          headers: {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0',
          },
          params: {
            _: Date.now(),
            random: Math.random(),
          },
        },
      );

      return response.data;
    } catch (e) {
      console.log('Match not found!');
    }
  }
}
