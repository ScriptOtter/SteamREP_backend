import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
import 'dotenv/config';
//import * as cookieParser from 'cookie-parser';
import cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cookieParser());
  app.setGlobalPrefix('/api');
  app.use(bodyParser.json({ limit: '1mb' })); // установите желаемый лимит
  app.use(bodyParser.urlencoded({ limit: '1mb', extended: true })); // для urlencoded запросов
  app.enableCors({
    methods,
    origin: true,
    credentials: true,
    allowedHeaders:
      'Content-Type, Authorization, SteamREP_accessToken, SteamREP_refreshToken',
  });
  app.useStaticAssets(join(__dirname, '..', 'static/images'), {
    prefix: '/api/static/',
  });

  await app.listen(3000);
}
bootstrap();
