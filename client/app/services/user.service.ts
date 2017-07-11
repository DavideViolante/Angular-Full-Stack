import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http,
              public authHttp: AuthHttp) { }

  register(user): Observable<any> {
    return this.http.post('/api/user', JSON.stringify(user), this.options);
  }

  login(credentials): Observable<any> {
    return this.http.post('/api/login', JSON.stringify(credentials), this.options);
  }

  getUsers(): Observable<any> {
    return this.authHttp.get('/api/users').map(res => res.json());
  }

  countUsers(): Observable<any> {
    return this.authHttp.get('/api/users/count').map(res => res.json());
  }

  addUser(user): Observable<any> {
    return this.authHttp.post('/api/user', JSON.stringify(user), this.options);
  }

  getUser(user): Observable<any> {
    return this.authHttp.get(`/api/user/${user._id}`).map(res => res.json());
  }

  editUser(user): Observable<any> {
    return this.authHttp.put(`/api/user/${user._id}`, JSON.stringify(user), this.options);
  }

  deleteUser(user): Observable<any> {
    return this.authHttp.delete(`/api/user/${user._id}`, this.options);
  }

}
