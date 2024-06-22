import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  constructor(private apiService: ApiService) {

  }

  sendLogout() {
    this.apiService.logout();
  }

}
