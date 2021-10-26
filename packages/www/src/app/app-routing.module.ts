import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListPageComponent } from './todo-list/list-page/todo-list-page.component';

const routes: Routes = [
  { path: '', component: TodoListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
