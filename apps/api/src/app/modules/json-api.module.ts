import { Module } from '@nestjs/common';
import { JsonController } from '../interfaces/api/json-controller/json.controller';
import { JsonDataRepository } from '../infrastructure/repository/JsonDataRepository';
import { JsonApiService } from '../application/json-api.service';
import { JsonDataFormatter } from '../domain/service/JsonDataFormatter';
import { FireStoreLibrary } from '../infrastructure/library/FireStoreLibrary';

@Module({
  controllers: [JsonController],
  providers: [
    JsonApiService,
    JsonDataRepository,
    JsonDataFormatter,
    FireStoreLibrary,
  ],
  exports: [JsonDataRepository, JsonDataFormatter],
})
export class JsonApiModule {}
