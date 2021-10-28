import { Test, TestingModule } from '@nestjs/testing';
import { TasksTypeormService } from './tasks-typeorm.service';

describe('TasksTypeormService', () => {
  let service: TasksTypeormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksTypeormService],
    }).compile();

    service = module.get<TasksTypeormService>(TasksTypeormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
