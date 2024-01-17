import { Component } from '@angular/core';
import { TaskService } from '../../task/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pl-task-board',
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.scss',
})
export class TaskBoardComponent {
  constructor(readonly taskService: TaskService, private readonly router:Router) {}
  navigateCreate(){
    this.taskService.unsetSelectedTask();
    this.router.navigate(['board/create'])
  }
}
