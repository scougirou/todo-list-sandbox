import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TaskDto } from '../../model/task.dto';
import { TaskStatusEnum } from '../../model/task-status.enum';

describe('TasksService', () => {
  let service: TasksService;

  let dummyTask: TaskDto;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
    }).compile();

    service = module.get<TasksService>(TasksService);

    dummyTask = {
      id: '12345',
      createdAt: new Date(1635166915096),
      modifiedAt: new Date(1635166915096),
      title: 'Dummy todo-list',
      status: TaskStatusEnum.TODO,
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be able to add new tasks', () => {
    service.addTask(dummyTask);

    expect(service.taskList).toMatchSnapshot();
  });

  it('should be able to get tasks', () => {
    service.taskList = new Map<string, TaskDto>();
    service.taskList.set('12345', dummyTask);
    service.taskList.set('67890', dummyTask);

    expect(service.getTaskList()).toStrictEqual([dummyTask, dummyTask]);
  });

  it('should update todo-list status to done', () => {
    service.taskList = new Map<string, TaskDto>();
    service.taskList.set('12345', dummyTask);

    service.completeTask('12345');

    expect(service.taskList.get('12345').status).toStrictEqual(
      TaskStatusEnum.DONE,
    );
  });

  it('should delete task', () => {
    service.taskList = new Map<string, TaskDto>();
    service.taskList.set('12345', dummyTask);

    service.deleteTask('12345');

    expect(service.taskList).toStrictEqual(new Map<string, TaskDto>());
  });

  it('should filter tasks', () => {
    service.taskList = new Map<string, TaskDto>();
    // Avoid mutating a common object during tests, mitigate side effects
    const dummyTask3 = Object.assign({}, dummyTask);
    const dummyTask4 = Object.assign({}, dummyTask);
    dummyTask3.status = TaskStatusEnum.DONE;
    dummyTask3.id = 'dummyTask3';
    dummyTask4.status = TaskStatusEnum.DONE;
    dummyTask4.id = 'dummyTask4';
    service.taskList.set(dummyTask.id, dummyTask);
    service.taskList.set(dummyTask.id, dummyTask);
    service.taskList.set(dummyTask3.id, dummyTask3);
    service.taskList.set(dummyTask4.id, dummyTask4);

    const result = service.filterBy(TaskStatusEnum.DONE);

    expect(result).toStrictEqual([dummyTask3, dummyTask4]);
  });
});
