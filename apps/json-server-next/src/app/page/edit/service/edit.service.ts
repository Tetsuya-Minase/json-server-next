import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormArray } from '@angular/forms';
import { register } from '../../../actions/index.action';

@Injectable()
export class EditService {
  constructor(private store: Store<{ editReducer: any }>) {}

  registerJsonData(
    name: string,
    rawData: string,
    keyValueList: FormArray,
  ): void {
    console.log('name: ', name);
    console.log('rawData: ', rawData);
    console.log('keyValueList: ', keyValueList);
    this.store.dispatch(register());
  }
}
