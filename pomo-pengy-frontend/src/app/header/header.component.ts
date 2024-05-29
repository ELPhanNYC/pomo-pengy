import { Component, OnInit, OnDestroy} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy{

  user: string = '';
  logged_in: boolean = false;

  constructor( private apiService: ApiService){}

  ngOnInit() {
    this.checkStatus()
    console.log(this.user);
    console.log(this.logged_in);

  }

  ngOnDestroy() {
    localStorage.clear();
  }

  checkStatus() {
    const user = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    if(user && token) {
      this.user = user;
      this.logged_in = true;
    }
  }
}
