import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { task, taskState } from '../../../../task/task';

@Component({
  selector: 'pl-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task?: task = {
    title: 'dummy title',
    description: 'dummy description',
    status: taskState.Unassigned,
    priority: 0,
  };
  @Output() selectedTask = new EventEmitter<task>();

  @HostListener('click')
  triggerOutput() {
    // taskState.Unassigned should only ever be present in dummy data
    if (this.task?.status !== taskState.Unassigned)
      this.selectedTask.emit(this.task);
  }
}
