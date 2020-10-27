import { Module } from '@nestjs/common';
import { AppController } from './interfaces/controller/app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { JsonApiModule } from './modules/json-api.module';
import { JsonApiService } from './application/json-api.service';
import { EnvironmentService } from './domain/service/environment.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public/template'),
    }),
    ConfigModule.forRoot({
      envFilePath: 'apps/api/src/environments/.env'
    }),
    JsonApiModule,
  ],
  controllers: [AppController],
  providers: [JsonApiService, EnvironmentService],
})
export class AppModule {}
