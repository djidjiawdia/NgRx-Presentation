import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from 'src/app/services/task.service';
import * as TaskActions from './task.action';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';

@Injectable()
export class TaskEffects {
  getAllTask$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TaskActions.loadTasks),
      switchMap(() => this._taskService.getAllTasks()),
      map((tasks) => TaskActions.loadTasksSuccess({ tasks })),
      catchError(() => of(TaskActions.loadTasksFailure()))
    )
  );

  createTask$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TaskActions.addTask),
      mergeMap((action) => this._taskService.createTask(action.task)),
      map((task) => TaskActions.addTaskSuccess({ task })),
      catchError(() => of(TaskActions.addTaskFailure()))
    )
  );

  completedTask$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TaskActions.completedTask, TaskActions.updateTask),
      mergeMap((action) => this._taskService.updateTask(action.task)),
      map((task) => TaskActions.updateTaskSuccess({ task })),
      catchError(() => of(TaskActions.updateTaskFailure()))
    )
  );

  constructor(private _actions$: Actions, private _taskService: TaskService) {}
}
