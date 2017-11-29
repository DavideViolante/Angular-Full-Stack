import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Entity } from './base.service';
import { User } from '../shared/models/user.model';

@Injectable()
export class UserService extends Entity<User> {
  SingularAPI = 'user';
  PluralAPI = 'users';

  register(user: User): Observable<User> {
    return this.http.post<User>('/api/user', user);
  }

  login(credentials): Observable<any> {
    return this.http.post<any>('/api/login', credentials);
  }

}
