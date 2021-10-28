import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './controller/tasks.controller';
import { TasksService } from './service/tasks.service';
import { TYPES } from './ioc/ioc-tokens';
import { TypeOrmModule } from '@nestjs/typeorm';
import { defaultOptions } from './config/database-options';
import { TasksTypeormService } from './service/typeorm/tasks-typeorm.service';
import Task from './model/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => defaultOptions,
    }),
    TypeOrmModule.forFeature([Task]),
  ],
  controllers: [AppController, TasksController],
  providers: [
    AppService,
    {
      provide: TYPES.services.TasksService,
      useClass: TasksService,
    },
    TasksTypeormService,
  ],
})
export class AppModule {}
