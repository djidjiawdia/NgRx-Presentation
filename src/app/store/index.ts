import { ActionReducerMap } from '@ngrx/store';
import { TaskState } from './task/task.state';
import { taskReducer } from './task/task.reducer';
import { TaskEffects } from './task/task.effects';

export interface AppState {
  task: TaskState;
}

export const appReducers: ActionReducerMap<AppState> = {
  task: taskReducer,
};

export const appEffects = [TaskEffects];
