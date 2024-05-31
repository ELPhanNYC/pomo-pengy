import { Injectable } from '@angular/core';
import { Task } from './task.model';

// Service (Methods) that can can be used with the task model (interface) we defined.
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  removeTask(index: number): Task {
    return this.tasks.splice(index, 1)[0];
  }
}
