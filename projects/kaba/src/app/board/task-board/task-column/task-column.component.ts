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
  @Input({required:true}) containedState!: taskState;

  get stateDescriptorText(): string {
    return taskState[this.containedState];
  }

  columnTasks = computed(() =>
    this.taskService
      .tasks()
      .filter((task) => task.status === this.containedState)
      .sort((taskA, taskB) => taskB.priority - taskA.priority)
  );

  constructor(readonly taskService: TaskService) {}

  updateSelectedTask(selectedTask: task) {
    this.taskService.updateSelectedTask(selectedTask);
  }
}
