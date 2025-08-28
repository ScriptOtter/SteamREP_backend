import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { join } from 'path';
import axios from 'axios';
import * as https from 'https';
import bz2 from 'unbzip2-stream';
import { promisify } from 'util';
import { exec } from 'child_process';
const execPromise = promisify(exec);
@Injectable()
export class DownloadDemoService {
  public async downloadDemo(url: string, name: string): Promise<string> {
    const filePath = join('src/modules/cs2/demo-analyse/demo/' + name + '.dem');

    const writer = createWriteStream(filePath);

    const agent = new https.Agent({ minVersion: 'TLSv1.3' });
    const response = await axios.get(url, {
      responseType: 'stream',
      httpsAgent: agent,
    });
    console.log(filePath, 'Скачка');
    const bunzip = bz2();
    response.data.pipe(bunzip).pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        console.log('Скачали');

        resolve(filePath);
        return filePath;
      });
      writer.on('error', () => {
        console.log('не скачали');
        reject;
      });
    });
  }
}
