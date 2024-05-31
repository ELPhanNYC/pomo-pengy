import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginInterface } from './login-interface';

import { supervisor } from './storage-supervisor.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  sendRegister(data: { username: string; email: string; password: string }) {
    return this.http.post('http://localhost:8080/api/register', data);
  }

  sendLogin(data: { email: string; password: string }) {
    return this.http.post<LoginInterface>('http://localhost:8080/api/login', data);
  }

  sendTask(data: { title: string, dueDate: Date, include: boolean }) {
    const token = supervisor.getItem("token");
    if(token){
      const headers = new HttpHeaders({
        "authorization": token
      });
      return this.http.post('http://localhost:8080/api/postTask', data, {headers});
    } 
    // return an empty object
    return new Observable<Object>;
  }

  getTasks() {
    const token = supervisor.getItem("token");
    console.log(token)
    if(token){
      const headers = new HttpHeaders({
        "authorization": token
      });
      return this.http.get('http://localhost:8080/api/getTasks', {headers});
    } 
    // return an empty object
    return new Observable<Object>;
  }

}

