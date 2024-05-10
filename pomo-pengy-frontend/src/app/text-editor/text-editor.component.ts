import { Component } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent {
  markdownText: string = '';

  fonts: string[] = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana', 'Jua'];

  // Default selected font
  selectedFont: string = this.fonts[0];

}
