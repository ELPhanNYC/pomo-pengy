import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInAnimation } from 'src/assets/animations/animations';

@Component({
  selector: 'app-pomo-page',
  templateUrl: './pomo-page.component.html',
  styleUrls: ['./pomo-page.component.scss'],
  animations: [fadeInAnimation]
})
export class PomoPageComponent {

}
