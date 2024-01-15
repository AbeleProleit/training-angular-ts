import { Component, Input } from '@angular/core';
import { taskState } from '../../../task/task';
import { TaskService } from '../../../task/task.service';

@Component({
  selector: 'pl-task-column',
  templateUrl: './task-column.component.html',
  styleUrl: './task-column.component.scss',
})
export class TaskColumnComponent {
  @Input() stateDescriptor: taskState = taskState.Unassigned;

  get stateDescriptorText(): string {
    return taskState[this.stateDescriptor];
  }

  constructor(private readonly taskService:TaskService) {}
}
