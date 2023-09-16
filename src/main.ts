import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  

  const config = new DocumentBuilder()
    .setTitle('API Para Restaurante')
    .setDescription('Api Criada para Realização do Teste : Luciano')
    .setVersion('0.1')
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
