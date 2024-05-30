import { Component } from '@angular/core';
import { loadInAnimation} from 'src/assets/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [loadInAnimation]
})
export class AppComponent {
  title = 'pengy-portal-frontend';
}
