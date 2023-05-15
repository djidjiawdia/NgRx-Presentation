import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.type';
import {
  addTask,
  addTaskSuccess,
  resetSelectedTask,
  updateTask,
} from 'src/app/store/task/task.action';
import {
  selectCurrentTask,
  selectTaskLoading,
} from 'src/app/store/task/task.selector';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', [Validators.required]),
    notes: new FormControl(),
    priority: new FormControl('', [
      Validators.required,
      Validators.max(2),
      Validators.min(0),
    ]),
    dueDate: new FormControl(),
  });

  title = 'Ajouter une nouvelle tâche';
  isEdit = false;

  loading$!: Observable<boolean>;

  constructor(private _store: Store, private _actionSubject: ActionsSubject) {}

  ngOnInit(): void {
    this._actionSubject
      .pipe(ofType(addTaskSuccess))
      .subscribe(() => this.resetForm());
    this.loading$ = this._store.select(selectTaskLoading);
    this._store.select(selectCurrentTask).subscribe((task) => {
      if (task) {
        this.isEdit = true;
        this.title = 'Modifier la tâche';
        this.taskForm.patchValue(task);
      } else {
        this.resetForm();
      }
    });
  }

  onSubmit(): void {
    if (this.taskForm.invalid) {
      return;
    }

    let task: Task = {
      ...this.taskForm.value,
      priority: +this.taskForm.get('priority')?.value,
    };

    if (this.isEdit) {
      this._store.dispatch(updateTask({ task }));
    } else {
      task.completed = false;
      this._store.dispatch(addTask({ task }));
    }
  }

  resetForm(): void {
    this.taskForm.reset();
    this.isEdit = false;
    this.title = 'Ajouter une nouvelle tâche';
  }

  onResetSelected(): void {
    this._store.dispatch(resetSelectedTask());
  }
}
