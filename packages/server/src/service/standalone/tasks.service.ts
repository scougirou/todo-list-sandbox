import { Injectable } from '@nestjs/common';
import { TaskDto } from '../model/task.dto';
import { TaskStatusEnum } from '../model/task-status.enum';
import { TasksServiceInterface } from './task.service.interface';

@Injectable()
export class TasksService implements TasksServiceInterface {
  taskList: Map<string, TaskDto>;

  constructor() {
    this.taskList = new Map<string, TaskDto>();
  }

  getTaskList(): TaskDto[] {
    const result: TaskDto[] = [];

    for (const task of this.taskList.values()) {
      result.push(task);
    }

    return result;
  }

  addTask(task: TaskDto): void {
    this.taskList.set(task.id, task);
  }

  deleteTask(taskId: string): string | undefined {
    const internalTask = this.taskList.get(taskId);
    if (!internalTask) {
      return undefined;
    }
    this.taskList.delete(taskId);
    return taskId;
  }

  completeTask(taskId: string): TaskDto {
    const internalTask = this.taskList.get(taskId);
    if (internalTask) {
      internalTask.status = TaskStatusEnum.DONE;
    }
    return internalTask;
  }

  filterBy(filterStatus: TaskStatusEnum): TaskDto[] {
    const result: TaskDto[] = [];
    for (const task of this.taskList.values()) {
      if (task.status === filterStatus) {
        result.push(task);
      }
    }

    return result;
  }
}
