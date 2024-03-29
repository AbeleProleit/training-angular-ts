import { Injectable, signal } from '@angular/core';
import { task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  readonly tasks = signal<task[]>([]);
  private readonly tasksUrl = 'http://localhost:3000/tasks';

  readonly selectedTask = signal<task | undefined>(undefined);

  constructor() {
    this.loadTasks();
  }

  async loadTasks() {
    fetch(this.tasksUrl)
      .then((result) => {
        if (!result.ok) throw Error('Network Error');
        return result.json() as Promise<task[]>;
      })
      .then((tasks: task[]) => {
        this.tasks.set(tasks);
      })
      .catch((error) => console.log(error));
    this.unsetSelectedTask();
  }

  async updateTask(updatedTask: task) {
    if (!updatedTask.id) {
      this.createTask(updatedTask);
      return;
    }
    const taskId = updatedTask.id;

    const requestOptions = {
      method: 'Put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    };

    fetch(`${this.tasksUrl}/${taskId}`, requestOptions).then((response) => {
      if (response.ok) this.loadTasks();
    });
  }

  async createTask(newTask: task) {
    const requestOptions = {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    };

    fetch(this.tasksUrl, requestOptions).then((response) => {
      if (response.ok) this.loadTasks();
    });
  }

  async deleteTask(deletedTask: task) {
    if (!deletedTask.id) return;

    const requestOptions = {
      method: 'Delete',
    };
    const taskId = deletedTask.id;

    fetch(`${this.tasksUrl}/${taskId}`, requestOptions).then((response) => {
      if (response.ok) this.loadTasks();
    });
  }

  updateSelectedTask(selectedTask: task) {
    this.selectedTask.set(selectedTask);
  }
  unsetSelectedTask() {
    this.selectedTask.set(undefined);
  }
}
