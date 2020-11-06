import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { register } from '../../../actions/index.action';
import { Maybe } from '../../../common/types/utility';
import { InvalidParamError } from '../../../model/errors/InvalidParamError';

@Injectable()
export class EditService {
  constructor(private store: Store<{ editReducer: any }>) {}

  registerJsonData(
    name: Maybe<string>,
    rawData: Maybe<string>,
    keyValueList: Maybe<{[key:string]: Maybe<string>}[]>,
  ): void {
    if (name == undefined || rawData == null || keyValueList == null) {
      throw new InvalidParamError(`name or rawData, keyValueList is required.`);
    }
    for (const item of keyValueList) {
      for (const key of Object.keys(item)) {
        if (key == undefined || item[key] == undefined) {
          throw new InvalidParamError(`keyValueList is required.`);
        }
      }
    }
    this.store.dispatch(register({name, data: null}));
  }
}
