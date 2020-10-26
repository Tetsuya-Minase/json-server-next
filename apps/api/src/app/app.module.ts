import { Module } from '@nestjs/common';
import { AppController } from './interfaces/controller/app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { JsonApiModule } from './modules/json-api.module';
import { JsonApiService } from './application/json-api.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../../dist/apps/json-server-next'),
    }),
    JsonApiModule,
  ],
  controllers: [AppController],
  providers: [JsonApiService],
})
export class AppModule {}
