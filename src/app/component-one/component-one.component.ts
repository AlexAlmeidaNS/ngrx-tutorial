import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable} from 'rxjs';
import { Increment, Decrement, Reset } from '../counter.actions';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
   }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(new Increment());
  }
 
  decrement() {
    this.store.dispatch(new Decrement());
  }
 
  reset() {
    this.store.dispatch(new Reset());
  }

}
