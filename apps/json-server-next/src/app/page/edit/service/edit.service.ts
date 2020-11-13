import { Injectable } from '@angular/core';
import { register } from '../../../actions/index.action';
import { Maybe } from '../../../common/types/utility';
import { InvalidParamError } from '../../../model/errors/InvalidParamError';
import { Store } from '@ngrx/store';

export type RegisterJsonDataParam = {
  readonly name: Maybe<string>,
  readonly rawData: Maybe<{ [key: string]: Maybe<string> }>,
  readonly keyValueList: Maybe<{ [key: string]: Maybe<string> }[]>,
  readonly isRawData: boolean
}

@Injectable()
export class EditService {
  constructor(private store: Store<{ registerReducer: any }>) {}

  registerJsonData({ name, rawData, keyValueList, isRawData }: RegisterJsonDataParam): void {
    if (name == undefined) {
      throw new InvalidParamError(`name is required.`);
    }
    if (isRawData) {
      if (rawData == undefined) {
        throw new InvalidParamError('rawData is required.');
      }
      this.store.dispatch(register({url: `/v1/json/${name}`, data: rawData}));
    }

    const data = {};
    for (const item of keyValueList) {
      const values = Object.values(item);
      if (values[0] == undefined || values[1] == undefined) {
        throw new InvalidParamError(`keyValueList is required.`);
      }
      data[values[0]] = values[1];
    }
    this.store.dispatch(register({url: `/v1/json/${name}`, data }));
  }
}
