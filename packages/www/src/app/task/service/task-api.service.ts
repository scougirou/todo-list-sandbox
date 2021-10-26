import { Injectable } from '@angular/core';
import { TaskDto } from '../model/task.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

const GET_TASK_LIST_URI = '/tasks'
const ADD_TASK_LIST_URI = '/tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskApiService {
  taskListSubject: BehaviorSubject<TaskDto[]>;

  constructor(private readonly httpClient: HttpClient) {
    this.taskListSubject = new BehaviorSubject<TaskDto[]>([]);
  }

  async addTask(task: TaskDto): Promise<void> {
    await this.httpClient.post(`${environment.apiUrl}${ADD_TASK_LIST_URI}`, task ).toPromise();
    this.updateTaskList();
  }

  private async updateTaskList(): Promise<void> {
    const taskList = await this.getAllTasks();
    this.taskListSubject.next(taskList);
  }

  private async getAllTasks(): Promise<TaskDto[]> {
    const taskList = await this.httpClient.get<TaskDto[]>(`${environment.apiUrl}${GET_TASK_LIST_URI}`).toPromise();
    return taskList;
  }
}
