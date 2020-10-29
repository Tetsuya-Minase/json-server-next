import { JsonDataEntity } from '../entity/JsonDataEntity';

export type JsonListResponse = {
  start: number;
  allCount: number;
  results: number;
  list: JsonDataEntity[];
};
