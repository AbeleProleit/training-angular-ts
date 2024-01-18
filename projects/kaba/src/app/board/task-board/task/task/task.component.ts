import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { task, taskState } from '../../../../task/task';
import { Router } from '@angular/router';
import { TaskService } from '../../../../task/task.service';

@Component({
  selector: 'pl-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task?: task = {
    title: 'dummy title',
    description: 'dummy description',
    status: taskState.Backlog,
    priority: 0,
  };
  @Output() selectedTask = new EventEmitter<task>();

  constructor(
    private readonly router: Router,
    private readonly taskService: TaskService
  ) {}

  @HostListener('click')
  triggerOutput() {
      this.selectedTask.emit(this.task);
  }

  @HostListener('dblclick')
  onDoubleClick() {
    this.router.navigate(['/board/edit']);
  }
}
