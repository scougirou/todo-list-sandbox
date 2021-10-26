import { Injectable } from '@angular/core';
import { TaskDto } from '../model/task.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

const TASK_URI = 'tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskApiService {
  taskListSubject: BehaviorSubject<TaskDto[]>;

  constructor(private readonly httpClient: HttpClient) {
    this.taskListSubject = new BehaviorSubject<TaskDto[]>([]);
    this.updateTaskList();
  }

  async addTask(task: TaskDto): Promise<void> {
    await this.httpClient.post(`${environment.apiUrl}/${TASK_URI}`, task ).toPromise();
    this.updateTaskList();
  }

  async markTaskAsDone(taskId: string): Promise<void> {
    await this.httpClient.post(`${environment.apiUrl}/${TASK_URI}/${taskId}/complete`,{}).toPromise();
    this.updateTaskList();
  }

  async deleteTask(taskId: string): Promise<void> {
    await this.httpClient.delete(`${environment.apiUrl}/${TASK_URI}/${taskId}`).toPromise();
    this.updateTaskList();
  }

  private async updateTaskList(): Promise<void> {
    const taskList = await this.getAllTasks();
    this.taskListSubject.next(taskList);
  }

  private async getAllTasks(): Promise<TaskDto[]> {
    const taskList = await this.httpClient.get<TaskDto[]>(`${environment.apiUrl}/${TASK_URI}`).toPromise();
    return taskList;
  }
}
