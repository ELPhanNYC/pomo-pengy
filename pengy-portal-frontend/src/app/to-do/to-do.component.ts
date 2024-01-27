import { Component, ElementRef, Renderer2 } from '@angular/core';

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

    const body = `
      <label>task*</label>
      <br>
      <input class = "user-vals" type="text" id="task" required>
      <br>
      <label>due date</label>
      <br>
      <input class = "user-vals" type="datetime-local" id="due-date">
      <br>
      <input class="submit" type="submit" value="add it!">
    `;

    var div = this.renderer.createElement("div");
    this.renderer.addClass(div,"task-item");
    this.renderer.setProperty(div, "id", "temp-container");
    div.innerHTML = body;

    const submit = this.el.nativeElement.querySelector('.submit');
    this.renderer.listen(submit, 'click',()=>this.subClick());
    
    const existing = this.el.nativeElement.querySelector('.task-container');
    // Append the new div to the existing div
    this.renderer.appendChild(existing, div);

  }
  public subClick(): void{
    const add_button = this.el.nativeElement.querySelector('.task-add-button');
    this.renderer.setStyle(add_button, "display", "block");
    
    const temp = this.el.nativeElement.querySelector('.temp-container');
    this.renderer.removeChild(this.renderer.parentNode(temp), temp);
  }
}
