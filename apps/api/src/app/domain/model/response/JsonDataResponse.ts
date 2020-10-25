import { JsonDataValue } from '../object/JsonDataValue';

export type JsonListResponse = {
  start: number;
  allCount: number;
  results: number;
  list: Array<JsonDataValue>;
};

export type JsonDataResponse = {
  key: string;
  data: any;
};
