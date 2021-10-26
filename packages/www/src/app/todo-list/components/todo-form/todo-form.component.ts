import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskDto } from '../../model/task.dto';
import { TaskApiService } from '../../service/task-api.service';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  taskTitle = new FormControl('');

  constructor(private readonly tasksService: TaskApiService) { }

  ngOnInit(): void {
  }

  async addTask() {
    const task: TaskDto = {
      title: this.taskTitle.value,
    }
    await this.tasksService.addTask(task);
  }
}
