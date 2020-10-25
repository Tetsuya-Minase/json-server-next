import { Test, TestingModule } from '@nestjs/testing';
import { JsonController } from './JsonController';
import { JsonApiService } from '../../../application/json-api.service';

describe('AppController', () => {
  let appController: JsonController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [JsonController],
      providers: [JsonApiService],
    }).compile();

    appController = app.get<JsonController>(JsonController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
