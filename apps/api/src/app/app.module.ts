import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JsonApiModule } from './modules/json-api.module';
import { JsonApiService } from './application/json-api.service';
import { EnvironmentService } from './domain/service/environment.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'environments/.env',
      isGlobal: true
    }),
    JsonApiModule
  ],
  providers: [JsonApiService, EnvironmentService]
})
export class AppModule {
}
