import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskDto } from '../../model/task.dto';
import { TaskStatusEnum } from '../../model/task-status.enum';

@Component({
  selector: 'task-row',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input()
  task: TaskDto = {};

  @Output()
  markTaskAsDoneOutput = new EventEmitter<string>();
  @Output()
  deleteTaskOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  isTaskDone(): boolean {
    return this.task.status === TaskStatusEnum.DONE;
  }

  markTaskAsDone() {
    this.markTaskAsDoneOutput.emit(this.task.id);
  }

  deleteTask() {
    this.deleteTaskOutput.emit(this.task.id)
  }
}
