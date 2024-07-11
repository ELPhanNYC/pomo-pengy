import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { fadeInAnimation } from 'src/assets/animations/animations';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  animations: [fadeInAnimation]
})
export class RegisterPageComponent implements OnInit{

  formRegister!: FormGroup;

  ngOnInit() {
    this.formRegister = new FormGroup({
        username: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8), this.complexityValidator()])
    });
  }
  

  formStatus = false;

  constructor( private apiService: ApiService, private router: Router) {

  }

  get username() {
    return this.formRegister.get("username");
  }

  get email() {
    return this.formRegister.get("email");
  }

  get password() {
    return this.formRegister.get("password");
  }

  getUsername() {
    return this.formRegister.get("username")?.value || '';
  }

  getEmail() {
    return this.formRegister.get("email")?.value || '';
  }

  getPassword() {
    return this.formRegister.get("password")?.value|| '';
  }

  postToDB(event: Event){

    event.preventDefault()

    if(this.formRegister.invalid) {
      this.formStatus = true;
    }
    else {

      this.formStatus = false;

      const payload = {
        email: this.getEmail(),
        username: this.getUsername(),
        password: this.getPassword()
      };

      console.log(payload)
      
      this.apiService.sendRegister(payload)
        .subscribe(response => {
          
          alert('Registration Successful!');
          this.router.navigate(['/login']);
        }, error => {
          console.error('Error:', error);
        });
      }
    }

    // Password validator
    complexityValidator(): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        const passwordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
        return !passwordValid ? { complexity: true } : null;
      };
    }

}
