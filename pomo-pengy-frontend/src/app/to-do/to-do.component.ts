import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { ApiService } from '../api.service';
import { TaskItem } from '../task-item';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = { title: '', dueDate: new Date(), include: false,};

  displayInfo:boolean = true;

  constructor(private apiService: ApiService, private taskService: TaskService, private el: ElementRef, private renderer: Renderer2) {
    
  }

  ngOnInit() {
    this.getFromDB();
    this.tasks = this.taskService.getTasks();
  }

  toggleInfo(){
    this.displayInfo = !this.displayInfo
  }

  addTask(): void {
    if (!this.newTask.title.trim()) {
      // You can show an error message or handle it as needed
      alert('Please enter a task title!');
      return;
    }

    // store the task in the DB to be retrieved when re-entering the site
    this.postToDB()

    this.taskService.addTask(this.newTask);
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

  parseTaskData(response: TaskItem[]) {
    for(let i of response){
      const task: Task = {title: i['title'], dueDate: new Date(i['dueDate']), include: i['include']};
      this.taskService.addTask(task);
    }
  }

  getFromDB() {
    this.apiService.getTasks()
      .subscribe((response: any) => {  
        if(response){
          this.parseTaskData(response);
        }
      }, (error: any) => {
        console.error('Error:', error);
      });
  }

  postToDB(){
    const payload = {
      title: this.newTask.title,
      dueDate: this.newTask.dueDate,
      include: this.newTask.include
    };
    
    this.apiService.sendTask(payload)
      .subscribe((response: any) => {  
          null;
      }, (error: any) => {
        console.error('Error:', error);
      });
  }
}
