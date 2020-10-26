import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Put,
} from '@nestjs/common';
import { JsonApiService } from '../../../application/json-api.service';
import { HttpStatusCode } from '../../../domain/constants/HttpStatusCode';
import { JsonListResponse } from '../../../domain/model/response/JsonDataResponse';
import { JsonDataValue } from '../../../domain/model/object/JsonDataValue';
import { ListRequestQueryBuilder } from '../../../domain/model/query/ListRequestQueryBuilder';

/**
 * JsonController for web app.
 */
@Controller('/api/v1/json')
export class JsonController {
  constructor(private readonly service: JsonApiService) {}

  /**
   * getAll Json List.
   * @param start start index.
   * @param result result count.
   * @param istAll getAll all data.
   */
  @Get()
  @HttpCode(HttpStatusCode.OK)
  async getJsonList(
    @Param('start') start: number,
    @Param('result') result: number,
    @Param('isAll') istAll: boolean,
  ): Promise<JsonListResponse> {
    const requestQuery = new ListRequestQueryBuilder()
      .setStart(start)
      .setResult(result)
      .setIsAll(istAll)
      .build();
    return await this.service.getJsonList(requestQuery);
  }

  /**
   * getAll Json Data by key.
   * @param key json key.
   */
  @Get(':key')
  @HttpCode(HttpStatusCode.OK)
  async getById(@Param('key') key: string): Promise<JsonDataValue> {
    return await this.service.getJsonByKey(key);
  }

  @Put(':name')
  @HttpCode(HttpStatusCode.NO_CONTENT)
  async registerJsonData(
    @Param('name') name: string,
    @Body() body: JsonDataValue,
  ): Promise<void> {
    await this.service.registerJsonData(name, body);
  }

  @Delete()
  @HttpCode(HttpStatusCode.NO_CONTENT)
  async deleteAll(): Promise<void> {
    await this.service.deleteAll();
  }
}
