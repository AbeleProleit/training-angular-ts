import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TaskService } from '../../../task/task.service';
import { task } from '../../../task/task';

@Component({
  selector: 'pl-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.scss',
})
export class TaskEditComponent {
  taskEditForm?: FormGroup;
  inputControl = new FormControl('test', Validators.required);

  constructor(private readonly formBuilder: FormBuilder, readonly taskService:TaskService) {
    // console.log     (this.task)
  }
}
