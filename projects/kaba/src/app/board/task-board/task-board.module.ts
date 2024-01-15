import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskColumnComponent } from './task-column/task-column.component';
import { TaskBoardComponent } from './task-board.component';



@NgModule({
  declarations: [
    TaskBoardComponent,
    TaskColumnComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TaskBoardComponent,
    TaskColumnComponent
  ]
})
export class TaskBoardModule { }
