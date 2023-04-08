require('dotenv/config');
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT: number = +process.env.PORT || 3000;
  await app.listen(PORT, () =>
    console.log(`Server run on port http://localhost:${PORT}`),
  );
}
bootstrap();
