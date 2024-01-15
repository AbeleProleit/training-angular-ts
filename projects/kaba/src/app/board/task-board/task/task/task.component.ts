import { Component } from '@angular/core';
import { task, taskState } from '../../../../task/task';

@Component({
  selector: 'pl-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  task?: task = {title:"dummy title", description:"dummy description", status:taskState.Unassigned, priority:0};
}
