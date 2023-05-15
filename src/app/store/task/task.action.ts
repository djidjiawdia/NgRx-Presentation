import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/models/task.type';

export const loadTasks = createAction('[TASK] load all tasks');
export const loadTasksSuccess = createAction(
  '[TASK] load all task success',
  props<{ tasks: Task[] }>()
);
export const loadTasksFailure = createAction('[TASK] load all tasks failure');

export const addTask = createAction(
  '[TASK] add new task',
  props<{ task: Task }>()
);
export const addTaskSuccess = createAction(
  '[TASK] add new task success',
  props<{ task: Task }>()
);
export const addTaskFailure = createAction('[TASK] add new task failure');

export const currentTask = createAction(
  '[TASK] select task',
  props<{ currentTask: Task }>()
);

export const resetSelectedTask = createAction('[TASK] reset selectedTask');

export const completedTask = createAction(
  '[TASK] completed task',
  props<{ task: Task }>()
);

export const updateTask = createAction(
  '[TASK] update task',
  props<{ task: Task }>()
);

export const updateTaskSuccess = createAction(
  '[TASK] update task success',
  props<{ task: Task }>()
);
export const updateTaskFailure = createAction('[TASK] update task failure');
