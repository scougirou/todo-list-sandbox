import { TaskStatusEnum } from './task-status.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class Task {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public title: string;

  @Column({
    type: 'enum',
    enum: TaskStatusEnum,
    default: TaskStatusEnum.TODO,
  })
  public status: TaskStatusEnum;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamp' })
  modifiedAt: Date;
}

export default Task;
