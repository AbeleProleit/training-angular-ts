import { Component, Input, computed } from '@angular/core';
import { taskState } from '../../../task/task';
import { TaskService } from '../../../task/task.service';

@Component({
  selector: 'pl-task-column',
  templateUrl: './task-column.component.html',
  styleUrl: './task-column.component.scss',
})
export class TaskColumnComponent {
  // what state this column represents
  @Input() containedState: taskState = taskState.Unassigned;

  get stateDescriptorText(): string {
    return taskState[this.containedState];
  }

  columnTasks = computed(() =>
    this.taskService
      .tasks()
      .filter((task) => task.status === this.containedState)
  );

  constructor(private readonly taskService: TaskService) {}
}
