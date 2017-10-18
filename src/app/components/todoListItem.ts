import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'todo-list-item',
    template: `
      <li>
        <span [class.completed]="todo.completed">{{todo.id}} - {{todo.text}}</span>
        <button (click)="complete.emit(todo)"> Done </button>
        <button (click)="destroy.emit(todo)"> Delete </button>
      </li>
    `,
    styles: ['.completed {text-decoration: line-through;}']
})

export class TodoListItem {
    @Input() todo;
    @Output() complete = new EventEmitter();
    @Output('delete') destroy = new EventEmitter()
}