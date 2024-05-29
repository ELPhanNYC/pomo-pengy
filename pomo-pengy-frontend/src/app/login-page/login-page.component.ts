import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
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
      .subscribe(response => {       
        alert('Login Successful!');
        this.apiService.set_state();
        this.router.navigate(['/']);
      }, error => {
        console.error('Error:', error);
      });
  }

}
