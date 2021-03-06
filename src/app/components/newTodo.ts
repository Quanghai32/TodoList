import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'new-todo-input',
    template: `
      <div>
        <input type="text" #newtodo placeholder="Add a todo" />
        <button (click)="saveTodo(newtodo)">Add</button>
      </div>
    `
  })
  export class NewTodoInput {
    @Output() create = new EventEmitter();
    saveTodo(el){
      this.create.emit({text: el.value});
      el.value = ''
    }
  }