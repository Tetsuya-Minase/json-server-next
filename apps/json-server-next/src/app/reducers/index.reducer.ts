import { createReducer, on } from '@ngrx/store';
import { fetchSuccess, getList, registerError, registerSuccess } from '../actions/index.action';
import { JsonData } from '../model/JsonData';
import { uniqByName } from '../common/functions/ArrayFunctions';

export const initialState: JsonData[] = [];

const _reducer = createReducer(
  initialState,
  on(getList, state => state),
  on(fetchSuccess, (state, props) => uniqByName([...state, ...props.response]))
);

const _registerReducer = createReducer(
  '',
  on(registerSuccess, () => 'OK'),
  on(registerError, () => 'ERROR')
);

export function reducer(state, action) {
  return _reducer(state, action);
}

export function registerReducer(state, action) {
  return _registerReducer(state, action);
}
