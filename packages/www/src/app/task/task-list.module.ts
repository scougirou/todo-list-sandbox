import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListPageComponent } from './list-page/task-list-page.component';
import { TaskComponent } from './components/task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TaskListPageComponent,
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class TaskListModule { }
