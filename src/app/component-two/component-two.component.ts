import { Component, OnInit } from '@angular/core';
import { Increment, Decrement, Reset } from '../counternew.actions';
import { Store, select } from '@ngrx/store';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  countNew$: Observable<number>;

  constructor(private store: Store<{ countNew: number }>) {
    this.countNew$ = store.pipe(select('countNew'));
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
