import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url_api = '/users'

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url_api)
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url_api, user)
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.url_api}/${id}`)
  }
}
