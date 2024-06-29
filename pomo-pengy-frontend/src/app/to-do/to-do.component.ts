import { Component, ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { ApiService } from '../api.service';
import { TaskItem } from '../task-item';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  newTask: Task = { title: '', dueDate: new Date(), include: false, edit: false};

  displayInfo:boolean = true;

  constructor(private apiService: ApiService, private taskService: TaskService, private el: ElementRef, private renderer: Renderer2) {
    
  }

  ngOnInit(): void {
    this.getFromDB();
    this.tasks = this.taskService.getTasks();
  }

  ngOnDestroy(): void {
    const status_arr:any[] = this.apiService.checkLogInStatus();
    // Clear the to do list if the user is logged in (avoid double printing)
    if(status_arr[1]){
      this.taskService.clearTasks()
    }
  }

  toggleInfo(){
    this.displayInfo = !this.displayInfo
  }

  toggleEdit(index: number) {
    this.newTask = {
      title: this.tasks[index].title,
      dueDate: this.tasks[index].dueDate,
      include: this.tasks[index].include,
      edit: false
    }
    this.tasks[index].edit = !this.tasks[index].edit;
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
    this.newTask = { title: '', dueDate: new Date(), include: false, edit: false};

    const container = this.el.nativeElement.querySelector('.temp-container');
    this.renderer.setStyle(container, "display", "none");

    const add_button = this.el.nativeElement.querySelector('.task-add-button');
    this.renderer.setStyle(add_button, "display", "block");
  }

  removeTask(index: number): void {
    const removed:Task = this.taskService.removeTask(index);
    console.log(removed.title);
    this.removeFromDB(removed.title);
  }

  displayForm(): void{
    const container = this.el.nativeElement.querySelector('.temp-container');
    this.renderer.setStyle(container, "display", "block");

    const add_button = this.el.nativeElement.querySelector('.task-add-button');
    this.renderer.setStyle(add_button, "display", "none");
  }

  parseTaskData(response: TaskItem[]) {
    for(let i of response){
      const task: Task = {title: i['title'], dueDate: new Date(i['dueDate']), include: i['include'], edit: false};
      this.taskService.addTask(task);
    }
  }

  patchTask(index: number) {
    const payload = {
      title: this.tasks[index].title,
      newTitle: this.newTask.title,
      newDueDate: this.newTask.dueDate,
      newInclude: this.newTask.include
    };

    this.tasks[index] = {
      title: this.newTask.title,
      dueDate: this.newTask.dueDate,
      include: this.newTask.include,
      edit: false 
    };

    this.newTask = { title: '', dueDate: new Date(), include: false, edit: false};

    this.patchDB(payload);

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

  removeFromDB(title: string){
    const payload = {
      title: title
    };
    
    this.apiService.removeTask(payload)
      .subscribe((response: any) => {  
          null;
      }, (error: any) => {
        console.error('Error:', error);
      });
  }

  patchDB(payload: object) {
    this.apiService.patchTask(payload)
    .subscribe((response: any) => {  
      null;
    }, (error: any) => {
      console.error('Error:', error);
    });
  }
}
