import { Component} from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });


  failedLogin = false;
  emptyLogin = false;

  constructor( private apiService: ApiService, private router: Router) {

  }

  get email() {
    return this.formLogin.get('email');
  }

  get password() {
    return this.formLogin.get('password');
  }

  getEmail() {
    return this.formLogin.get('email')?.value || '';
  }

  getPassword() {
    return this.formLogin.get('password')?.value || '';
  }

  postToDB(event: Event){

    event.preventDefault();

    if (this.formLogin.invalid) {
      this.emptyLogin = true;
    }
    else {

      this.emptyLogin = false;

      const payload = {
        email: this.getEmail(),
        password: this.getPassword()
      };
      
      this.apiService.sendLogin(payload)
        .subscribe((response: LoginInterface) => {       
          // Set token expiry to 1 Day => Require Re-login
          supervisor.setItem('username', response.username, 1440);
          supervisor.setItem('token', response.accessToken, 1440);
          this.router.navigate(['/']);
        }, error => {
          this.failedLogin = true;
      });
    }
  }   
}

