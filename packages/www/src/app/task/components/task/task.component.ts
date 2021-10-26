import { Component, Input, OnInit } from '@angular/core';
import { TaskDto } from '../../model/task.dto';

@Component({
  selector: 'task-row',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input()
  task: TaskDto = {};

  constructor() { }

  ngOnInit(): void {
  }

}
