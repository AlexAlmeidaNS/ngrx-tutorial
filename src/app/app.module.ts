import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { counterReducer } from './counter.reducer';
import { counterNewReducer } from './counternew.reducer';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

@NgModule({
  // imports:      [ BrowserModule, StoreModule.forRoot(reducers, { metaReducers }) ],
  imports:      [ BrowserModule, StoreModule.forRoot({count: counterReducer, countNew: counterNewReducer}) ],
  declarations: [ AppComponent, MyCounterComponent, ComponentOneComponent, ComponentTwoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
