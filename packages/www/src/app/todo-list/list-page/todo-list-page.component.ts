import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskDto } from '../model/task.dto';
import { TaskApiService } from '../service/task-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit, OnDestroy {
  taskList: TaskDto[] = [];
  subscription: Subscription | undefined;

  constructor(private readonly taskApiService: TaskApiService) { }

  async ngOnInit(): Promise<void> {
      this.subscription = this.taskApiService.taskListSubject.subscribe((taskList) => {
        this.taskList = taskList;
      })
  }

  async markTaskAsDone(taskId: string): Promise<void> {
    console.dir(taskId)
    await this.taskApiService.markTaskAsDone(taskId);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
