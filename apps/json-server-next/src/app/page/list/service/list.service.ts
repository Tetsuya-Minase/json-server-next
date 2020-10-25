import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchList, getList } from '../../../actions/index.action';
import { Injectable } from '@angular/core';
import { JsonData } from '../../../model/JsonData';

@Injectable()
export class ListService {
  private readonly _list$: Observable<JsonData[]>;

  constructor(private store: Store<{ listReducer: any }>) {
    this._list$ = store.pipe(select('listReducer'));
  }

  get list$() {
    return this._list$;
  }

  getList(): void {
    this.store.dispatch(getList());
  }

  fetchList(): void {
    console.log('fetch');
    this.store.dispatch(fetchList({ url: 'api/v1/json' }));
  }
}
