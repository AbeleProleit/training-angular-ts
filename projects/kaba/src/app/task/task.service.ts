import { Injectable, signal } from '@angular/core';
import { task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  readonly tasks = signal<task[]>([]);


  constructor() {
    this.loadTasks();
  }

  async loadTasks() {
    fetch('http://localhost:3000/tasks')
      .then((result) => {
        if (!result.ok) throw Error('Network Error');
        return result.json() as Promise<task[]>;
      })
      .then((tasks: task[]) => {
        this.tasks.set(tasks);
      })
      .catch((error) => console.log(error));
  }
}
