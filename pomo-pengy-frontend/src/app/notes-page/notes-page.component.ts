import { Component } from '@angular/core';
import { fadeInAnimation } from 'src/assets/animations/animations';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss'],
  animations: [fadeInAnimation]
})
export class NotesPageComponent {

}
