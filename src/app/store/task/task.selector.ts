import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './task.state';
import { StatsTask } from 'src/app/models/task.type';

export const selectTaskFeature = createFeatureSelector<TaskState>('task');

export const selectAllTasks = createSelector(
  selectTaskFeature,
  (state) => state.tasks
);

export const selectCurrentTask = createSelector(
  selectTaskFeature,
  (state) => state.currentTask
);

export const selectStatsTask = createSelector(
  selectAllTasks,
  (tasks) =>
    ({
      total: tasks.length,
      completed: tasks.filter((t) => t.completed).length,
    } as StatsTask)
);

export const selectTaskLoading = createSelector(
  selectTaskFeature,
  (state) => state.loading
);
