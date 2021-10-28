import { TaskDto } from '../model/task.dto';
import { TaskStatusEnum } from '../model/task-status.enum';

export interface TasksServiceInterface {
  getTaskList(): TaskDto[];

  addTask(task: TaskDto): void;

  deleteTask(taskId: string): string | undefined;

  completeTask(taskId: string): TaskDto;

  filterBy(filterStatus: TaskStatusEnum): TaskDto[];
}
