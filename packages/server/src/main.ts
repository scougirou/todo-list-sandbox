import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HOST, PORT, SCHEME } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
  });

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('TodoList API')
    .setDescription('Sandbox TodoList API project')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(PORT).then(() => {
    console.log(
      `App listening on port ${PORT}, swagger available on ${SCHEME}://${HOST}:${PORT}/swagger`,
    );
  });
}
bootstrap();
