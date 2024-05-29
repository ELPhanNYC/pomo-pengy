import { Component} from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { LoginInterface } from '../login-interface';

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
      .subscribe((response: LoginInterface) => {       
        alert('Login Successful!');
        console.log(response)
        localStorage.setItem('username', response.username);
        localStorage.setItem('token', response.accessToken);
        this.router.navigate(['/']);
      }, error => {
        console.error('Error:', error);
      });
  }

}
