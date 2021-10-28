import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { TasksService } from '../service/tasks.service';
import { TaskDto } from '../model/task.dto';
import { Response } from 'express';
import { TaskStatusEnum } from '../model/task-status.enum';
import { ApiQuery } from '@nestjs/swagger';
import { TasksServiceInterface } from '../service/task.service.interface';
import { TYPES } from '../ioc/ioc-tokens';

@Controller('tasks')
export class TasksController {
  constructor(
    @Inject(TYPES.services.TasksService)
    private taskService: TasksServiceInterface,
  ) {}

  @Get()
  getTaskList(): TaskDto[] {
    return this.taskService.getTaskList();
  }

  @Get('filter?')
  @ApiQuery({ name: 'status', enum: TaskStatusEnum })
  filterByStatus(@Query('status') filterStatus: TaskStatusEnum): TaskDto[] {
    return this.taskService.filterBy(filterStatus);
  }

  @Post()
  addTask(@Body() task: TaskDto): void {
    const newTask = TaskDto.create(task);
    this.taskService.addTask(newTask);
  }

  @Post(':id/complete')
  completeTask(
    @Param('id') taskId: string,
    @Res() response: Response,
  ): TaskDto | void {
    const updatedTask = this.taskService.completeTask(taskId);
    if (!updatedTask) {
      response.status(HttpStatus.NOT_FOUND).send();
    } else {
      // Todo: handle 304 Not Modified
      response.status(HttpStatus.OK).send(updatedTask);
    }
  }

  @Delete(':id')
  deleteTask(
    @Param('id') taskId: string,
    @Res() response: Response,
  ): { taskId: string } | void {
    const deletedId = this.taskService.deleteTask(taskId);
    if (!deletedId) {
      response.status(HttpStatus.NOT_FOUND).send();
    } else {
      // todo: replace the response type with a DTO
      response.status(HttpStatus.OK).send({ taskId: deletedId });
    }
  }
}
