import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url_api = 'http://172.16.83.20:4201'

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url_api}/users`)
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url_api}/users`, user)
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.url_api}/users/${id}`)
  }
}
