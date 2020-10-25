type JsonField =
  | string
  | number
  | boolean
  | { [key: string]: string | number | boolean | object | any[] }
  | any[];

export type JsonDetail = {
  [key: string]: JsonField;
};

export type JsonData = {
  name: string;
  data: JsonDetail;
};

export type JsonDataValue = {
  key: string;
  data: any;
};

export type APIResponse = {
  start: number;
  allCount: number;
  results: number;
  list: Array<JsonDataValue>;
};
