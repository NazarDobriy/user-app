import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common/pipes';

import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
bootstrap();
