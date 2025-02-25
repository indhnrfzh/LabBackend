import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Latihan Nest JS Kelas - B')
    .setDescription('Indah Nur Fauziah - 105841107022')
    .setVersion('0.1')
    .addTag('Latihan 1') 
    .addBearerAuth()
    .build();
  
//     const documentFactory = () => SwaggerModule.createDocument(app, config);
//     SwaggerModule.setup('api-docs', app, documentFactory);


//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();
const documenFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, documenFactory);

  await app.listen(3000); // Listen on all network interfaces
}

bootstrap();