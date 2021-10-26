import { TaskStatusEnum } from './task-status.enum';

export class TaskDto {
  id?: string;

  title?: string;

  status?: TaskStatusEnum;

  createdAt?: Date;

  modifiedAt?: Date;

  constructor(id?: string) {
    if (id) {
      this.id = id;
    }
    this.status = TaskStatusEnum.TODO;
  }
}
