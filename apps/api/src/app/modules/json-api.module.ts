import { Module } from '@nestjs/common';
import { JsonController } from '../interfaces/api/json-controller/json.controller';
import { JsonDataRepository } from '../infrastructure/repository/JsonDataRepository';
import { JsonApiService } from '../application/json-api.service';
import { JsonDataFormatter } from '../domain/service/JsonDataFormatter';
import { FireStoreLibrary } from '../infrastructure/library/FireStoreLibrary';
import { EnvironmentService } from '../domain/service/environment.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [JsonController],
  providers: [
    JsonApiService,
    JsonDataRepository,
    JsonDataFormatter,
    FireStoreLibrary,
    EnvironmentService
  ],
  exports: [JsonDataRepository, JsonDataFormatter],
})
export class JsonApiModule {}
