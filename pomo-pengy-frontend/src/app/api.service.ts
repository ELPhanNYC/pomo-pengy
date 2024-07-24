import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpParams,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginInterface } from "./login-interface";

import { supervisor } from "./storage-supervisor.service";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // url: string = "http://localhost:8080/";
  url: string = "https://seashell-app-uarvh.ondigitalocean.app/";

  sendRegister(data: { username: string; email: string; password: string }) {
    return this.http.post(this.url + "api/register", data);
  }

  sendLogin(data: { email: string; password: string }) {
    return this.http.post<LoginInterface>(
      this.url + "api/login",
      data,
    );
  }

  sendTask(data: { title: string; dueDate: Date; include: boolean }) {
    const token = supervisor.getItem("token");
    if (token) {
      const headers = new HttpHeaders({
        authorization: token,
      });
      return this.http.post(this.url + "api/postTask", data, {
        headers,
      });
    }
    // return an empty object
    return new Observable<Object>();
  }

  getTasks() {
    const token = supervisor.getItem("token");
    console.log(token);
    if (token) {
      const headers = new HttpHeaders({
        authorization: token,
      });
      return this.http.get(this.url + "api/getTasks", { headers });
    }
    // return an empty object
    return new Observable<Object>();
  }

  removeTask(data: { title: string }) {
    const token = supervisor.getItem("token");
    if (token) {
      const headers = new HttpHeaders({
        authorization: token,
      });
      const params = new HttpParams().set("title", data.title);
      return this.http.delete(this.url + "api/removeTask", {
        headers,
        params,
      });
    }
    // return an empty object
    return new Observable<Object>();
  }

  patchTask(data: object) {
    const token = supervisor.getItem("token");
    if (token) {
      const headers = new HttpHeaders({
        authorization: token,
      });
      return this.http.patch(this.url + "api/patchTask", data, {
        headers,
      });
    }
    // return an empty object
    return new Observable<Object>();
  }

  getUserStats() {
    const token = supervisor.getItem("token");
    console.log(token);
    if (token) {
      const headers = new HttpHeaders({
        authorization: token,
      });
      return this.http.get(this.url + "api/sendStats", { headers });
    }
    return new Observable<Object>();
  }

  sendSession(data: { sessionTime: number}) {
    const token = supervisor.getItem("token");
    if (token) {
      const headers = new HttpHeaders({
        authorization: token,
      });
      return this.http.post(this.url + "api/endSession", data, {
        headers,
      });
    }
    // return an empty object
    return new Observable<Object>();
  }

  getUserRank() {
    const token = supervisor.getItem("token");
    console.log(token);
    if (token) {
      const headers = new HttpHeaders({
        authorization: token,
      });
      return this.http.get(this.url + "api/getRanking", { headers });
    }
    return new Observable<Object>();
  }


  logout() {
    supervisor.removeItem("username");
    supervisor.removeItem("token");
  }

  checkLogInStatus() {
    const user = supervisor.getItem('username');
    const token = supervisor.getItem('token');
    if(user && token) {
      return [user, token]
    }
    return []
  }
}
