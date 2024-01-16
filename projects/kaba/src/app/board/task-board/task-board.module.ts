import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskColumnComponent } from './task-column/task-column.component';
import { TaskBoardComponent } from './task-board.component';
import { TaskComponent } from './task/task/task.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskBoardComponent,
    TaskColumnComponent,
    TaskComponent,
    TaskEditComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TaskBoardComponent, TaskColumnComponent],
})
export class TaskBoardModule {}
