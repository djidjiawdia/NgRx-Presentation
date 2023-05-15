import { createReducer, on } from '@ngrx/store';
import { initialTaskState } from './task.state';
import * as TaskActions from './task.action';
import { Task } from 'src/app/models/task.type';

export const taskReducer = createReducer(
  initialTaskState,
  on(TaskActions.addTask, TaskActions.updateTask, (state) => ({
    ...state,
    loading: true,
  })),
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => {
    return {
      ...state,
      tasks,
    };
  }),
  on(TaskActions.addTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
    loading: false,
  })),
  on(TaskActions.currentTask, (state, { currentTask }) => ({
    ...state,
    currentTask,
  })),
  on(TaskActions.resetSelectedTask, (state) => ({
    ...state,
    currentTask: null,
  })),
  on(TaskActions.updateTaskSuccess, (state, { task }) => {
    const tasks: Task[] = state.tasks.map((t) => (t.id === task.id ? task : t));
    return {
      ...state,
      tasks,
      currentTask: null,
      loading: false,
    };
  })
);
