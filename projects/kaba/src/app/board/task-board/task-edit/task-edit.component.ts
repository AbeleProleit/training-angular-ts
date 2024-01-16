import { Component, effect } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../../../task/task.service';
import { task } from '../../../task/task';

@Component({
  selector: 'pl-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.scss',
})
export class TaskEditComponent {
  //Todo Form validation required
  taskForm = new FormGroup({
    title: new FormControl('title'),
    description: new FormControl('description'),
    status: new FormControl(1),
    priority: new FormControl(99),
  });

  private taskCopy: task | undefined;

  constructor(
    private readonly formBuilder: FormBuilder,
    readonly taskService: TaskService
  ) {
    effect(() => {
      this.setForm(taskService.selectedTask());
    });
  }

  async onSubmit() {
    const submittableTask: task = {
      title: this.taskForm.value.title!,
      description: this.taskForm.value.description!,
      status: this.taskForm.value.status!,
      priority: this.taskForm.value.priority!,
    };

    if (this.taskCopy) {
      submittableTask.id = this.taskCopy.id;
    }

    this.taskService.updateTask(submittableTask)

    console.log(this.taskForm.value);

    this.taskForm.reset();
    this.taskCopy = undefined;
  }

  onReset() {
    this.setForm(this.taskCopy, true);
  }

  setForm(task: task | undefined, isReset: boolean = false) {
    if (!task) {
      this.taskForm.reset();
      this.taskCopy = undefined;
      return;
    }

    if (!isReset) this.taskCopy = structuredClone(task);

    this.taskForm.setValue({
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority,
    });
  }
}
