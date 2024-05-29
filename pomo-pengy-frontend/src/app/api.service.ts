import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // used for site-wide state
  logged_in:boolean = false;

  constructor(private http:HttpClient) { }

  get_state() { return this.logged_in }

  // set on login
  set_state() {this.logged_in = true;}
  
  // reset on logout
  reset_state() {this.logged_in = false;}

  sendRegister(data: { username: string; email: string; password: string }) {
    return this.http.post('http://localhost:8080/api/register', data);
  }

  sendLogin(data: { email: string; password: string }) {
    return this.http.post('http://localhost:8080/api/login', data);
  }


}
