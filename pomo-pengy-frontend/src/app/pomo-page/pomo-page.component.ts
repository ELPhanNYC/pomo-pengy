import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-pomo-page',
  templateUrl: './pomo-page.component.html',
  styleUrls: ['./pomo-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class PomoPageComponent {

}
