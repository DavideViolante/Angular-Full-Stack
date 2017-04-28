import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  register(user): Observable<any> {
    return this.http.post('/api/user', JSON.stringify(user), this.options);
  }

  login(credentials): Observable<any> {
    return this.http.post('/api/login', JSON.stringify(credentials), this.options);
  }

  getCats(): Observable<any> {
    return this.http.get('/api/cats').map(res => res.json());
  }

  countCats(): Observable<any> {
    return this.http.get('/api/cats/count').map(res => res.json());
  }

  addCat(cat): Observable<any> {
    return this.http.post('/api/cat', JSON.stringify(cat), this.options);
  }

  getCat(cat): Observable<any> {
    return this.http.get(`/api/cat/${cat._id}`, this.options);
  }

  editCat(cat): Observable<any> {
    return this.http.put(`/api/cat/${cat._id}`, JSON.stringify(cat), this.options);
  }

  deleteCat(cat): Observable<any> {
    return this.http.delete(`/api/cat/${cat._id}`, this.options);
  }

}
