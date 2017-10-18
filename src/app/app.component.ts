import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
//import * as Rx from 'rxjs';
import 'rxjs/Rx';
//import 'rxjs/add/operator/map'
import { ADD_TODO, UPDATE_TODO, DELETE_TODO, COMPLETE_TODO, ALL, COMPLETE, PENDING } from './action/todoActions';
//import { AppState } from './state/app-state'


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos$: Observable<any>;
  model$: Observable<any>;
  filter$: Observable<any>;

  constructor(private store: Store<any>) {
    this.model$ = store.select('todos');
    this.filter$ = store.select('visibilityFilter');

    this.todos$ = Observable
      .combineLatest(
      this.model$,
      this.filter$,
      (models: any, visibilityFilter: any) => {
        return models.filter(visibilityFilter)
      }
      );
    this.todos$.subscribe(x => console.log(x));

  }
  addTodo(newTodo) {
    this.store.dispatch({
      type: ADD_TODO,
      payload: newTodo
    });
  }
  completeTodo(todo) {
    this.store.dispatch({
      type: COMPLETE_TODO,
      payload: todo
    });
  }
  deleteTodo(todo) {
    this.store.dispatch({
      type: DELETE_TODO,
      payload: todo
    });
  }
  show(filter) {
    this.store.dispatch({
      type: filter
    });
  }
  history(type) {
    this.store.dispatch({ type })
  }
}
