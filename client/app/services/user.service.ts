import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  register(user): Observable<any> {
    return this.http.post('/api/user', JSON.stringify(user));
  }

  login(credentials): Observable<any> {
    return this.http.post('/api/login', JSON.stringify(credentials));
  }

  getUsers(): Observable<any> {
    return this.http.get('/api/users');
  }

  countUsers(): Observable<any> {
    return this.http.get('/api/users/count');
  }

  addUser(user): Observable<any> {
    return this.http.post('/api/user', JSON.stringify(user));
  }

  getUser(user): Observable<any> {
    return this.http.get(`/api/user/${user._id}`);
  }

  editUser(user): Observable<any> {
    return this.http.put(`/api/user/${user._id}`, JSON.stringify(user));
  }

  deleteUser(user): Observable<any> {
    return this.http.delete(`/api/user/${user._id}`);
  }

}
