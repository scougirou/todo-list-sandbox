import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
import { TaskComponent } from './components/task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [
    TodoListPageComponent,
    TaskComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    FormsModule,
  ],
})
export class TodoListModule { }
