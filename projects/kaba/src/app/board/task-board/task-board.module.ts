import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskColumnComponent } from './task-column/task-column.component';
import { TaskBoardComponent } from './task-board.component';
import { TaskComponent } from './task/task/task.component';

@NgModule({
  declarations: [TaskBoardComponent, TaskColumnComponent, TaskComponent],
  imports: [CommonModule],
  exports: [TaskBoardComponent, TaskColumnComponent],
})
export class TaskBoardModule {}
