import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskDto } from '../model/task.dto';
import { TaskApiService } from '../service/task-api.service';
import { Subscription } from 'rxjs';
import { ALL, TaskStatusEnum } from '../model/task-status.enum';

@Component( {
  selector: 'todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: [ './todo-list-page.component.scss' ]
} )
export class TodoListPageComponent implements OnInit, OnDestroy {
  taskList: TaskDto[] = [];
  subscription: Subscription | undefined;

  // "Hack" to use the enum directly in the template for the filter dropdown
  statusEnum = TaskStatusEnum;
  currentStatus: TaskStatusEnum | string = ALL;
  allStatus = ALL;

  constructor( private readonly taskApiService: TaskApiService ) {
  }

  async ngOnInit(): Promise<void> {
    this.subscription = this.taskApiService.taskListSubject.subscribe( ( taskList ) => {
      this.taskList = taskList;
    } )
  }

  filterByStatus( status?: number | string ): void {
    // fixme: really ugly, find a better way hanle the 'all' case
    if ( status === ALL ) {
      this.taskApiService.filterByStatus();
    } else {
      this.taskApiService.filterByStatus( status as number );
    }
  }

  async markTaskAsDone( taskId: string ): Promise<void> {
    await this.taskApiService.markTaskAsDone( taskId );
  }

  async deleteTask( taskId: string ): Promise<void> {
    await this.taskApiService.deleteTask( taskId );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
