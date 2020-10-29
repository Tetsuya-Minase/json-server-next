import { Injectable } from '@nestjs/common';
import {
  JsonListResponse
} from '../model/response/JsonDataResponse';
import { JsonDataEntity } from '../model/entity/JsonDataEntity';
import { ListRequestQuery } from '../model/query/ListRequestQuery';

@Injectable()
export class JsonDataFormatter {
  /**
   * ページングして取得
   * @param query 検索条件
   * @param values 全検結果
   */
  toPagingResponse(
    query: ListRequestQuery,
    values: JsonDataEntity[]
  ): JsonListResponse {
    const list = this.paging(
      query.start,
      query.result,
      values
    );
    return {
      start: query.start,
      allCount: values.length,
      results: list.length,
      list
    };
  }

  /**
   * 複数件変換
   * @param values 取得結果
   */
  toAllResponse(values: JsonDataEntity[]): JsonListResponse {
    return {
      start: 1,
      allCount: values.length,
      results: values.length,
      list: values
    };
  }

  private paging(
    start: number,
    result: number,
    resultList: JsonDataEntity[]
  ): JsonDataEntity[] {
    // start 以上 & result 以下(indexが0始まりなので調整)
    return resultList.filter(
      (_, index) => start - 1 <= index && index < result
    );
  }
}
