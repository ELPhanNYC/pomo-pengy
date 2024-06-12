import { Component } from '@angular/core';
import { fadeInAnimation } from 'src/assets/animations/animations';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
  animations: [fadeInAnimation]

})
export class ProfilePageComponent {

}
