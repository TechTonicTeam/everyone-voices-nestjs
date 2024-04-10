import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {join} from "path";
import {NestExpressApplication} from "@nestjs/platform-express";

async function start() {
  const PORT = 5000
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {prefix: '/uploads'});
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true
  })

  const config = new DocumentBuilder()
      .setTitle('API build')
      .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        in: 'header',
        description: 'Enter your Bearer token here',
      }, 'bearer')
      .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(cookieParser())
  await app.listen(PORT, () => console.log(`SERVER START ON PORT=${PORT}`));
}
start();
