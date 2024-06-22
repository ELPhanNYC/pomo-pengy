import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/assets/animations/animations';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
  animations: [fadeInAnimation]

})
export class ProfilePageComponent implements OnInit{

  logged_in: boolean = false;

  constructor( private apiService: ApiService){}

  ngOnInit() {
    this.status()
  }

  status() {
    const result = this.apiService.checkLogInStatus()
    if(result[1]) {
      this.logged_in = result[1];
    }
  }

}
