import { Component} from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { LoginInterface } from '../login-interface';
import { fadeInAnimation } from 'src/assets/animations/animations';

import { supervisor } from '../storage-supervisor.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [fadeInAnimation]
})
export class LoginPageComponent {

  email: string = ''
  password: string = ''

  constructor( private apiService: ApiService, private router: Router) {

  }

  postToDB(){
    const payload = {
      email: this.email,
      password: this.password
    };
    
    this.apiService.sendLogin(payload)
      .subscribe((response: LoginInterface) => {       
        alert('Login Successful!');
        // Set token expiry to 1 Day => Require Re-login
        supervisor.setItem('username', response.username, 1440);
        supervisor.setItem('token', response.accessToken, 1440);
        this.router.navigate(['/']);
      }, error => {
        console.error('Error:', error);
      });
  }

}
