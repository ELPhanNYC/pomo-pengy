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
    var div = this.renderer.createElement("div");
    this.renderer.addClass(div,"task-item");
    this.renderer.setProperty(div, "id", "temp-container");
    const text = this.renderer.createText("The div is added!");
    this.renderer.appendChild(div, text);
    
    const existing = this.el.nativeElement.querySelector('.task-container');
    // Append the new div to the existing div
    this.renderer.appendChild(existing, div);

  }
}
