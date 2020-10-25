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
    const response = await this.repository.fetchJsonAll();
    return query.isAll
      ? this.formatter.toAllResponse(response)
      : this.formatter.toPagingResponse(query, response);
  }

  /**
   * getAll Json data by key.
   * @param key
   */
  async getJsonByKey(key: string): Promise<JsonDataValue> {
    return this.formatter.toResponse(await this.repository.fetchJsonByKey(key));
  }

  /**
   * Register Json Data.
   */
  async registerJsonData(name: string, jsonData: JsonDataValue): Promise<void> {
    const registerEntity = this.formatter.toEntity(name, jsonData);
    await this.repository.registerJson(registerEntity);
  }

  /**
   * delete all.
   */
  async deleteAll(): Promise<void> {
    await this.repository.deleteAll();
  }
}
