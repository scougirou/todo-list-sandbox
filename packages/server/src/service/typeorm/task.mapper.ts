import { TaskDto } from '../../model/task.dto';
import Task from '../../model/task.entity';

export class TaskMapper {
  public static dtoToEntity(input: TaskDto): Task {
    const res = new Task();
    res.id = input.id;
    res.status = input.status;
    res.createdAt = input.createdAt;
    res.title = input.title;
    res.modifiedAt = input.modifiedAt;

    return res;
  }

  public static entityToDTO(input: Task): TaskDto {
    const res = new TaskDto();
    res.id = input.id;
    res.status = input.status;
    res.createdAt = input.createdAt;
    res.title = input.title;
    res.modifiedAt = input.modifiedAt;

    return res;
  }
}
