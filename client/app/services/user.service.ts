import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './models/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  register(user): Observable<User> {
    return this.http.post<User>('/api/user', user);
  }

  login(credentials): Observable<any> {
    return this.http.post<any>('/api/login', credentials);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  countUsers(): Observable<any> {
    return this.http.get('/api/users/count');
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('/api/user', user);
  }

  getUser(user: User): Observable<User> {
    return this.http.get<User>(`/api/user/${user._id}`);
  }

  editUser(user: User): Observable<User> {
    return this.http.put<User>(`/api/user/${user._id}`, user);
  }

  deleteUser(user: User): Observable<User> {
    return this.http.delete<User>(`/api/user/${user._id}`);
  }

}
