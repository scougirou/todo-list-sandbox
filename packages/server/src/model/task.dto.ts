import { TaskStatusEnum } from './task-status.enum';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export class TaskDto {
  @ApiPropertyOptional({
    description: 'Task UUID, should be left empty when creating a todo-list',
  })
  id?: string;

  @ApiPropertyOptional({
    description: 'Task description',
  })
  title: string;

  @ApiPropertyOptional({
    description: 'Task Status, can be TODO or DONE',
    example: 'TODO',
  })
  status: TaskStatusEnum;

  @ApiPropertyOptional({
    description:
      'Task creation date, will be setup at the todo-list creation time if left empty',
  })
  createdAt?: Date;

  @ApiPropertyOptional({
    description: 'Task last modification date',
  })
  modifiedAt?: Date;

  constructor() {
    this.id = randomUUID();
    this.status = TaskStatusEnum.TODO;
  }

  static create(inputTask?: TaskDto): TaskDto {
    const newTask = new TaskDto();
    if (inputTask && inputTask.title) {
      newTask.title = inputTask.title;
    }
    return newTask;
  }
}
