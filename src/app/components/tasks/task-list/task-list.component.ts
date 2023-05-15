import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.type';
import {
  completedTask,
  currentTask,
  loadTasks,
} from 'src/app/store/task/task.action';
import {
  selectAllTasks,
  selectCurrentTask,
} from 'src/app/store/task/task.selector';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks$!: Observable<Task[]>;
  currentTask$!: Observable<Task | null>;

  constructor(private _store: Store) {}

  ngOnInit(): void {
    this._store.dispatch(loadTasks());
    this.tasks$ = this._store.select(selectAllTasks);
    this.currentTask$ = this._store.select(selectCurrentTask);
  }

  onSelectedTask(task: Task): void {
    this._store.dispatch(currentTask({ currentTask: task }));
  }

  onCompletedTask(task: Task): void {
    task = {
      ...task,
      completed: !task.completed,
    };
    this._store.dispatch(completedTask({ task }));
  }
}
