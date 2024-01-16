import { Component, computed } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TaskService } from '../../../task/task.service';

@Component({
  selector: 'pl-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.scss',
})
export class TaskEditComponent {
  taskTitle = computed(() => this.taskService.selectedTask()?.title);

  taskForm = new FormGroup({
    title: new FormControl('title'),
    description: new FormControl('description'),
    status: new FormControl(1),
    priority: new FormControl(99),
  });

  taskEditForm?: FormGroup;
  inputControl = new FormControl('test', Validators.required);

  constructor(
    private readonly formBuilder: FormBuilder,
    readonly taskService: TaskService
  ) {
  }

  onSubmit() {
    //Todo call for data update
    console.log(this.taskForm.value);

    this.taskForm.reset();
  }

  onReset() {
    //Todo revert Changes
    throw Error('Method onReset not implemented yet');
  }

  setForm(){
    console.log("update");

  }

}
