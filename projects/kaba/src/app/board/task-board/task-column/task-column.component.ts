import { Component, Input, computed } from '@angular/core';
import { taskState, task } from '../../../task/task';
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

  constructor(readonly taskService: TaskService) {}

  update() {
    const task = this.columnTasks()[0];
    this.taskService.updateTask(task);
  }

  updateSelectedTask(selectedTask: task) {
    this.taskService.updateSelectedTask(selectedTask);
  }
}
