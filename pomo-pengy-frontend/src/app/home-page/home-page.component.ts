import { Component} from '@angular/core';
import { fadeInAnimation } from 'src/assets/animations/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [fadeInAnimation]
})
export class HomePageComponent {

}
