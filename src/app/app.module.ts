import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app-store';


import { AppComponent } from './app.component';
import { NewTodoInput } from './components/newTodo';
import { TodoList } from './components/todoList';
import { TodoListItem } from './components/todoListItem';


@NgModule({
  declarations: [
    AppComponent,
    NewTodoInput,
    TodoList,
    TodoListItem
  ],
  imports: [    
    BrowserModule,
    StoreModule.provideStore(appReducer),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
