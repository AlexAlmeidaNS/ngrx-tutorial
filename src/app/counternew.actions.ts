import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  Increment = '[Counternew Component] Increment',
  Decrement = '[Counternew Component] Decrement',
  Reset = '[Counternew Component] Reset',
}
 
export class Increment implements Action {
  readonly type = ActionTypes.Increment;
}
 
export class Decrement implements Action {
  readonly type = ActionTypes.Decrement;
}
 
export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}

