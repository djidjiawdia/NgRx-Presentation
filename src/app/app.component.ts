import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { StatsTask } from './models/task.type';
import { Observable } from 'rxjs';
import { selectStatsTask } from './store/task/task.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'task-02';
  stats$!: Observable<StatsTask>;
  private _store: Store = inject(Store);

  ngOnInit(): void {
    this.stats$ = this._store.select(selectStatsTask);
  }
}
