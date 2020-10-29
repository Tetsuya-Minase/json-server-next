import { Injectable } from '@nestjs/common';
import { JsonDataRepository } from '../infrastructure/repository/JsonDataRepository';
import { JsonListResponse } from '../domain/model/response/JsonDataResponse';
import { JsonDataFormatter } from '../domain/service/JsonDataFormatter';
import { JsonDataValue } from '../domain/model/object/JsonDataValue';
import { ListRequestQuery } from '../domain/model/query/ListRequestQuery';

/**
 * Json Api Service.
 */
@Injectable()
export class JsonApiService {
  constructor(
    private readonly repository: JsonDataRepository,
    private readonly formatter: JsonDataFormatter,
  ) {}

  /**
   * getAll Json data list.
   * @param query search condition.
   * @return {@link JsonListResponse}
   */
  async getJsonList(query: ListRequestQuery): Promise<JsonListResponse> {
    const response = await this.repository.fetchAll();
    return query.isAll
      ? this.formatter.toAllResponse(response)
      : this.formatter.toPagingResponse(query, response);
  }

  /**
   * getAll Json data by key.
   * @param key
   */
  async getJsonByKey(key: string): Promise<JsonDataValue> {
    return await this.repository.fetchByKey(key);
  }

  /**
   * Register Json Data.
   */
  async registerJsonData(key: string, jsonData: JsonDataValue): Promise<void> {
    await this.repository.register(key, jsonData);
  }

  /**
   * delete by key.
   * @param key key名
   */
  async deleteByKey(key: string): Promise<void> {
    await this.repository.deleteByKey(key);
  }
}
