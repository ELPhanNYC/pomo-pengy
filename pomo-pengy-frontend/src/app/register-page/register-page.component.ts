import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class RegisterPageComponent {

  username: string = ''
  email: string = ''
  password: string = ''

  constructor( private apiService: ApiService, private router: Router) {

  }

  postToDB(){
    const payload = {
      email: this.email,
      username: this.username,
      password: this.password
    };
    
    this.apiService.sendRegister(payload)
      .subscribe(response => {
        
        alert('Registration Successful!');
        this.router.navigate(['/login']);
      }, error => {
        console.error('Error:', error);
      });
  }



}
