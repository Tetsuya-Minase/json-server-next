import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Put,
  Query,
} from '@nestjs/common';
import { JsonApiService } from '../../../application/json-api.service';
import { HttpStatusCode } from '../../../domain/constants/HttpStatusCode';
import { JsonListResponse } from '../../../domain/model/response/JsonDataResponse';
import { JsonDataValue } from '../../../domain/model/object/JsonDataValue';
import { ListRequestQueryBuilder } from '../../../domain/model/query/ListRequestQueryBuilder';

/**
 * JsonController for web app.
 */
@Controller('/v1/json')
export class JsonController {
  constructor(private readonly service: JsonApiService) {}

  /**
   * getAll Json List.
   * @param start start index.
   * @param result result count.
   * @param isAll when true, getAll all data.
   */
  @Get()
  @HttpCode(HttpStatusCode.OK)
  async getJsonList(
    @Query('start') start: number,
    @Query('result') result: number,
    @Query('isAll') isAll: boolean = false,
  ): Promise<JsonListResponse> {
    const requestQuery = new ListRequestQueryBuilder()
      .setStart(start)
      .setResult(result)
      .setIsAll(isAll)
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

  @Put(':key')
  @HttpCode(HttpStatusCode.NO_CONTENT)
  async registerJsonData(
    @Param('key') key: string,
    @Body() body: JsonDataValue,
  ): Promise<void> {
    await this.service.registerJsonData(key, body);
  }

  @Delete(':key')
  @HttpCode(HttpStatusCode.NO_CONTENT)
  async deleteAll(@Param('key') key: string): Promise<void> {
    await this.service.deleteByKey(key);
  }
}
