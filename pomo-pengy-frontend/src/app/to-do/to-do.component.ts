import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
  private idIndex:number;
  constructor(private el: ElementRef, private renderer: Renderer2){
    this.idIndex = 0;
  }
  public addTask(): void{
    
    const add_button = this.el.nativeElement.querySelector('.task-add-button');
    this.renderer.setStyle(add_button, "display", "none");


    var div = this.renderer.createElement("div");
    this.renderer.addClass(div,"task-item");
    this.renderer.setProperty(div, "id", "temp-container");
    // div.innerHTML = body;

    var label_task = this.renderer.createElement("label");
    this.renderer.appendChild(label_task, this.renderer.createText("task*"))

    var br1 = this.renderer.createElement("br");
    var br2 = this.renderer.createElement("br");
    var br3 = this.renderer.createElement("br");
    var br4 = this.renderer.createElement("br");

    var input_task = this.renderer.createElement("input");
    this.renderer.addClass(input_task, "user-vals")
    this.renderer.setProperty(input_task, "type", "text")
    this.renderer.setProperty(input_task, "id", "task")
    

    var label_date = this.renderer.createElement("label");
    this.renderer.appendChild(label_date, this.renderer.createText("due date"))

    var input_date = this.renderer.createElement("input");
    this.renderer.addClass(input_date, "user-vals")
    this.renderer.setProperty(input_date, "type", "datetime-local")
    this.renderer.setProperty(input_date, "id", "due-date")

    var submit = this.renderer.createElement("input");
    this.renderer.addClass(submit, "submit")
    this.renderer.setProperty(submit, "type", "submit")
    this.renderer.setProperty(submit, "id", "submit")
    this.renderer.setProperty(submit, "value", "add it!")
    this.renderer.listen(submit, "click", () => this.subClick())
    
    var elms = [label_task, br1, input_task, br2, label_date, br3, input_date, br4, submit]
    for(var i =0; i < elms.length; i++){
      this.renderer.appendChild(div, elms[i])
    }
    
    const existing = this.el.nativeElement.querySelector('.task-container');
    // Append the new div to the existing div
    this.renderer.appendChild(existing, div);

  }
  public subClick(): void{
    const add_button = this.el.nativeElement.querySelector('.task-add-button');
    this.renderer.setStyle(add_button, "display", "block");
    
    const task = this.el.nativeElement.querySelector('.temp-container');
    this.renderer.setStyle(task, "display", "none");

  }
}
