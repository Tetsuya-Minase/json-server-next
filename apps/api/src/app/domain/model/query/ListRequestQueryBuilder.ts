import { ListRequestQuery } from './ListRequestQuery';

export class ListRequestQueryBuilder {

  private _start: number;
  private _result: number;
  private _isAll: boolean;

  get start(): number {
    return this._start;
  }

  setStart(start: number): ListRequestQueryBuilder {
    this._start = start || 1;
    return this;
  }

  get result(): number {
    return this._result || 10;
  }

  setResult(result: number): ListRequestQueryBuilder {
    this._result = result;
    return this;
  }

  get isAll(): boolean {
    return this._isAll;
  }

  setIsAll(isAll: boolean): ListRequestQueryBuilder {
    this._isAll = isAll;
    return this;
  }

  build(): ListRequestQuery {
    return new ListRequestQuery(this.start, this.result, this.isAll);
  }
}
