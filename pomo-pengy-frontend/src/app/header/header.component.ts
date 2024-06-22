import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  user: string = '';
  logged_in: boolean = false;

  constructor( private apiService: ApiService){}

  ngOnInit() {
    this.status()
  }

  status() {
    const result = this.apiService.checkLogInStatus()
    if(result[1]) {
      this.user = result[0];
      this.logged_in = result[1];
    }
  }
}
