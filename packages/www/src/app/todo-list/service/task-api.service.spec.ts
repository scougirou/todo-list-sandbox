import { TestBed } from '@angular/core/testing';

import { TaskApiService } from './task-api.service';

describe('TodoService', () => {
  let service: TaskApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
