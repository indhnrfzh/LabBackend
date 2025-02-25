"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Latihan Nest JS Kelas - B')
        .setDescription('Indah Nur Fauziah - 105841107022')
        .setVersion('0.1')
        .addTag('Latihan 1')
        .addBearerAuth()
        .build();
    const documenFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-docs', app, documenFactory);
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map