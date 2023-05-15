import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Task } from '../models/task.type';

const TASK_API = 'http://localhost:3000/tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _httpClient: HttpClient = inject(HttpClient);

  getAllTasks(): Observable<Task[]> {
    return this._httpClient.get<Task[]>(TASK_API);
  }

  createTask(task: Task): Observable<Task> {
    return this._httpClient.post<Task>(TASK_API, task).pipe(delay(5000));
  }

  updateTask(task: Task): Observable<Task> {
    return this._httpClient
      .put<Task>(`${TASK_API}/${task.id}`, task)
      .pipe(delay(1500));
  }
}
