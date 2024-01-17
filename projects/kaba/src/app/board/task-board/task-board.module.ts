import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskColumnComponent } from './task-column/task-column.component';
import { TaskBoardComponent } from './task-board.component';
import { TaskComponent } from './task/task/task.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmDirective } from '../../directive/confirm.directive';

@NgModule({
  declarations: [
    TaskBoardComponent,
    TaskColumnComponent,
    TaskComponent,
    TaskEditComponent,
    ConfirmDirective
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [TaskBoardComponent, TaskColumnComponent],
})
export class TaskBoardModule {}
