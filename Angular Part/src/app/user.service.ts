import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/api/"
  constructor(private http: HttpClient) { }

  CreateUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + 'saveuser', user);
  }

  FindUser(user_id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}find/${user_id}`)
  }

  DeleteUser(user_id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}deleteuser/${user_id}`, {responseType: 'text'});
  }

  UpdateUser(user_id: number, user: object): Observable<Object> {
    return this.http.put(`${this.baseUrl}updateuser/${user_id}`, user);
  }

  FindAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'allusers');
  }
}
