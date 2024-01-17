import { Component, OnInit, effect } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../../task/task.service';
import { task } from '../../../task/task';
import { Router } from '@angular/router';

@Component({
  selector: 'pl-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.scss',
})
export class TaskEditComponent implements OnInit {
  taskForm = new FormGroup({
    title: new FormControl('title', [
      Validators.required,
      Validators.minLength(3),
    ]),
    description: new FormControl('description', [
      Validators.required,
      Validators.minLength(3),
    ]),
    status: new FormControl(1, [Validators.min(1), Validators.max(6)]),
    priority: new FormControl(99),
  });

  taskCopy: task | undefined;
  private dialog?: HTMLDialogElement;

  constructor(
    readonly taskService: TaskService,
    private readonly router: Router
  ) {
    effect(() => {
      this.setForm(taskService.selectedTask());
    });
    this.setForm(this.taskService.selectedTask());
  }

  ngOnInit(): void {
    this.dialog = document.getElementsByClassName(
      'dlg'
    )[0] as HTMLDialogElement;
    this.dialog.showModal();
    this.dialog.addEventListener('close', () => this.onClose());
  }

  async onSubmit() {
    const submittableTask: task = {
      title: this.taskForm.value.title!,
      description: this.taskForm.value.description!,
      status:
        this.taskForm.value.status === null ? 1 : this.taskForm.value.status!,
      priority:
        this.taskForm.value.priority === null
          ? 0
          : this.taskForm.value.priority!,
    };

    if (this.taskCopy) {
      submittableTask.id = this.taskCopy.id;
    }

    this.taskService.updateTask(submittableTask);

    console.log(this.taskForm.value);

    this.taskForm.reset();
    this.taskCopy = undefined;
    this.dialog?.close();
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

  onClose() {
    this.router.navigate(['/board']);
  }
  open() {
    this.dialog?.showModal();
  }

  onDelete() {
    if (this.taskCopy) this.taskService.deleteTask(this.taskCopy);
    this.dialog?.close();
  }
}
