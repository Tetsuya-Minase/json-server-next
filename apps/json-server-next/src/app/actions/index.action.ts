import { createAction, props } from '@ngrx/store';
import { JsonData } from '../model/JsonData';
import { Maybe } from '../common/types/utility';

export const getList = createAction('GET_LIST');
export const fetchList = createAction('FETCH_LIST', props<{ url: string }>());
export const fetchSuccess = createAction(
  'FETCH_SUCCESS',
  props<{ response: JsonData[] }>()
);
export const fetchError = createAction('FETCH_ERROR', props<{ error: any }>());
// FIXME: data type.
export const register = createAction('REGISTER_DATA', props<{ url: string, data: { [key: string]: Maybe<string> } }>());
export const registerSuccess = createAction('REGISTER_SUCCESS');
export const registerError = createAction('REGISTER_ERROR', props<{ error: any }>());
export type JsonServerActions = ReturnType<typeof getList |
  typeof fetchList |
  typeof fetchSuccess |
  typeof fetchError |
  typeof register |
  typeof registerSuccess |
  typeof registerError>;
