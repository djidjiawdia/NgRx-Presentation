import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MyState, decrement, increment, multiply } from 'src/app/my-store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count$!: Observable<number>;

  private _store: Store<MyState> = inject(Store);

  ngOnInit(): void {
    this.count$ = this._store.select((state) => state.count);
  }

  onDecrement(): void {
    this._store.dispatch(decrement());
  }

  onIncrement(): void {
    this._store.dispatch(increment());
  }

  onMultiply(factor: number): void {
    this._store.dispatch(multiply({ factor }));
  }
}
