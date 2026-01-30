import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ ENABLE CORS
  app.enableCors({
    origin: 'http://localhost:3000', // frontend URL
    credentials: true,
  });

  await app.listen(4000);
}
bootstrap();
