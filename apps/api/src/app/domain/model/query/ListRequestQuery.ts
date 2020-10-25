export class ListRequestQuery {
  constructor(private readonly _start: number,
              private readonly _result: number,
              private readonly _isAll: boolean) {
  }

  get start(): number {
    return this._start;
  }

  get result(): number {
    return this._result;
  }

  get isAll(): boolean {
    return this._isAll;
  }
}
