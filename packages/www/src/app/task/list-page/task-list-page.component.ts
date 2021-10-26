import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskDto } from '../model/task.dto';
import { TaskApiService } from '../service/task-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.scss']
})
export class TaskListPageComponent implements OnInit, OnDestroy {
  taskList: TaskDto[] = [];
  subscription: Subscription | undefined;

  constructor(private readonly taskApiService: TaskApiService) { }

  async ngOnInit(): Promise<void> {
      this.subscription = this.taskApiService.taskListSubject.subscribe((taskList) => {
        this.taskList = taskList;
      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
