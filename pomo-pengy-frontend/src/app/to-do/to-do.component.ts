import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
  tasks: Task[] = [];
  newTask: Task = { title: '', dueDate: new Date(), include: false,};

  constructor(private taskService: TaskService, private el: ElementRef, private renderer: Renderer2) {
    this.tasks = taskService.getTasks();
  }

  addTask(): void {
    if (!this.newTask.title.trim()) {
      // You can show an error message or handle it as needed
      alert('Please enter a task title!');
      return;
    }

    this.taskService.addTask(this.newTask);
    console.log(this.newTask);
    this.newTask = { title: '', dueDate: new Date(), include: false};

    const container = this.el.nativeElement.querySelector('.temp-container');
    this.renderer.setStyle(container, "display", "none");

    const add_button = this.el.nativeElement.querySelector('.task-add-button');
    this.renderer.setStyle(add_button, "display", "block");
  }

  removeTask(index: number): void {
    this.taskService.removeTask(index);
  }

  displayForm(): void{
    const container = this.el.nativeElement.querySelector('.temp-container');
    this.renderer.setStyle(container, "display", "block");

    const add_button = this.el.nativeElement.querySelector('.task-add-button');
    this.renderer.setStyle(add_button, "display", "none");
  }
}
