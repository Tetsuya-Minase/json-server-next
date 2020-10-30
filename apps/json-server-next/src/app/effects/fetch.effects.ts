import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from '../service/http.service';
import { fetchError, fetchList, fetchSuccess, JsonServerActions } from '../actions/index.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { APIResponse, JsonData } from '../model/JsonData';
import { of } from 'rxjs';

@Injectable()
export class FetchEffects {
  fetchList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchList),
      switchMap(action =>
        this.httpService.fetch(action.url).pipe(
          map((response: APIResponse) =>
            response.list.map(
              (v): JsonData => ({
                name: v.key,
                data: v.data,
              }),
            ),
          ),
          map((result: JsonData[]) => fetchSuccess({ response: result })),
          catchError(error => of(fetchError(error))),
        ),
      ),
    ),
  );

  constructor(
    private readonly actions$: Actions<JsonServerActions>,
    private readonly httpService: HttpService,
  ) {}
}
