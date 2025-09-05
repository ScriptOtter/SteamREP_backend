import { NestFactory } from '@nestjs/core';
import { CoreModule } from './core/core.module';
const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
//import * as cookieParser from 'cookie-parser';
import cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as bodyParser from 'body-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(CoreModule);
  app.use(cookieParser());
  const config = app.get(ConfigService);

  app.use(bodyParser.json({ limit: '1mb' })); // установите желаемый лимит
  app.use(bodyParser.urlencoded({ limit: '1mb', extended: true })); // для urlencoded запросов
  app.enableCors({
    methods,
    origin: ['https://steamrep.help/'], //config.getOrThrow<string>('ALLOWED_ORIGIN'),
    credentials: true,
    allowedHeaders:
      'Content-Type, Authorization, SteamREP_accessToken,  SteamREP_refreshToken',
  });
  app.useStaticAssets(join('./static/images'), {
    prefix: '/api/static/',
  });

  await app.listen(4000);
}
bootstrap();
