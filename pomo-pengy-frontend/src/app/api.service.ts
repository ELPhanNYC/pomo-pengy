import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInterface } from './login-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  sendRegister(data: { username: string; email: string; password: string }) {
    return this.http.post('http://localhost:8080/api/register', data);
  }

  sendLogin(data: { email: string; password: string }) {
    return this.http.post<LoginInterface>('http://localhost:8080/api/login', data);
  }


}
