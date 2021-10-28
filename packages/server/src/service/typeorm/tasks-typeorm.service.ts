import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Task from '../../model/task.entity';
import { Repository } from 'typeorm';
import { TasksServiceInterface } from '../task.service.interface';
import { TaskDto } from '../../model/task.dto';
import { TaskMapper } from './task.mapper';
import { TaskStatusEnum } from '../../model/task-status.enum';

@Injectable()
export class TasksTypeormService {
  constructor(
    @InjectRepository(Task) private readonly repo: Repository<Task>,
  ) {}

  async addTask(task: TaskDto): Promise<void> {
    await this.repo.insert(TaskMapper.dtoToEntity(task));
  }

  async completeTask(taskId: string): Promise<TaskDto> {
    const task = await this.repo.findOne(taskId);
    task.status = TaskStatusEnum.DONE;

    await this.repo.update(taskId, task);
    const resultTask = await this.repo.findOne(taskId);

    return TaskMapper.entityToDTO(resultTask);
  }

  async deleteTask(taskId: string): Promise<string | undefined> {
    await this.repo.delete(taskId);

    return taskId;
  }

  async filterBy(filterStatus: TaskStatusEnum): Promise<TaskDto[]> {
    return [];
  }

  async getTaskList(): Promise<TaskDto[]> {
    // should implement pagination
    const results = await this.repo.find();

    return results.map((task) => TaskMapper.entityToDTO(task));
  }
}
