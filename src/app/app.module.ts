import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
