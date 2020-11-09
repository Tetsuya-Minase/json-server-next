import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from '../service/http.service';
import {
  fetchError,
  fetchList,
  fetchSuccess,
  JsonServerActions,
  register, registerError,
  registerSuccess
} from '../actions/index.action';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { APIResponse, JsonData } from '../model/JsonData';
import { of } from 'rxjs';

@Injectable()
export class FetchEffect {
  constructor(
    private readonly actions$: Actions<JsonServerActions>,
    private readonly httpService: HttpService
  ) {
  }

  private readonly fetchList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchList),
      switchMap(action =>
        this.httpService.fetch(action.url).pipe(
          map((response: APIResponse) =>
            response.list.map(
              (v): JsonData => ({
                name: v.key,
                data: v.data
              })
            )
          ),
          map((result: JsonData[]) => fetchSuccess({ response: result })),
          catchError(error => of(fetchError(error)))
        )
      )
    )
  );
  private readonly registerData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      concatMap(({ url, data }) => this.httpService.register(url, data)),
      map(() => registerSuccess()),
      catchError(error => of(registerError(error)))
    )
  );
}
