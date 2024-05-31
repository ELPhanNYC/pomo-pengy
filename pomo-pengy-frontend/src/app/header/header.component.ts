import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { supervisor } from '../storage-supervisor.service';

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
    this.checkStatus()
  }

  checkStatus() {
    const user = supervisor.getItem('username');
    const token = supervisor.getItem('token');
    if(user && token) {
      this.user = user;
      this.logged_in = true;
    }
  }
}
