import { Injectable } from '@nestjs/common';
import {
  JsonDataResponse,
  JsonListResponse,
} from '../model/response/JsonDataResponse';
import { JsonDataEntity } from '../model/entity/JsonDataEntity';
import { JsonDataValue } from '../model/object/JsonDataValue';
import { ListRequestQuery } from '../model/query/ListRequestQuery';

@Injectable()
export class JsonDataFormatter {
  /**
   * ページングして取得
   * @param query 検索条件
   * @param entities 全検結果
   */
  toPagingResponse(
    query: ListRequestQuery,
    entities: JsonDataEntity[],
  ): JsonListResponse {
    const list = this.paging(
      query.start,
      query.result,
      entities.map(entity => ({ key: entity.key, data: entity.data })),
    );
    return {
      start: query.start,
      allCount: entities.length,
      results: list.length,
      list,
    };
  }

  /**
   * 複数件変換
   * @param entities 取得結果
   */
  toAllResponse(entities: JsonDataEntity[]): JsonListResponse {
    return {
      start: 1,
      allCount: entities.length,
      results: entities.length,
      list: entities.map(entity => ({ key: entity.key, data: entity.data })),
    };
  }

  toResponse(entity: JsonDataEntity): JsonDataResponse {
    return {
      key: entity.key,
      data: entity.data,
    };
  }

  toEntity(key: string, data: JsonDataValue): JsonDataEntity {
    return {
      key,
      data: data.data,
    };
  }

  private paging(
    start: number,
    result: number,
    resultList: Array<JsonDataValue>,
  ): Array<JsonDataValue> {
    // start 以上 & result 以下(indexが0始まりなので調整)
    return resultList.filter(
      (_, index) => start - 1 <= index && index < result,
    );
  }
}
