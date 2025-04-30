import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.enableCors({ methods });
  await app.listen(3000);
}
bootstrap();
