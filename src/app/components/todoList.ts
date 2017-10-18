import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'todo-list',
    template: `
      <div>
        <todo-list-item 
          *ngFor="let todo of todos.a"
          [todo]="todo"
          (complete)="completeTodo.emit($event)"
          (delete)="deleteTodo.emit($event)"
        ></todo-list-item>
      </div>
    `,
})
  export class TodoList {
    @Input() todos;
    @Output('complete') completeTodo = new EventEmitter();
    @Output('delete') deleteTodo = new EventEmitter()
  }