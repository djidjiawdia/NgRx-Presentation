import {
  ActionReducerMap,
  createAction,
  createReducer,
  on,
  props,
} from '@ngrx/store';

export interface MyState {
  count: number;
}

export const increment = createAction('[COUNTER] increment number');
export const decrement = createAction('[COUNTER] decrement number');
export const multiply = createAction(
  '[COUNTER] multiply number',
  props<{ factor: number }>()
);

export const counterReducer = createReducer(
  1,
  on(increment, (count) => count + 1),
  on(decrement, (count) => count - 1),
  on(multiply, (count, { factor }) => count * factor)
);

export const reducers: ActionReducerMap<MyState> = {
  count: counterReducer,
};
