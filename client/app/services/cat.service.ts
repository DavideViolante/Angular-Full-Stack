import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CatService {

  constructor(public authHttp: AuthHttp) { }

  getCats(): Observable<any> {
    return this.authHttp.get('/api/cats').map(res => res.json());
  }

  countCats(): Observable<any> {
    return this.authHttp.get('/api/cats/count').map(res => res.json());
  }

  addCat(cat): Observable<any> {
    return this.authHttp.post('/api/cat', JSON.stringify(cat));
  }

  getCat(cat): Observable<any> {
    return this.authHttp.get(`/api/cat/${cat._id}`).map(res => res.json());
  }

  editCat(cat): Observable<any> {
    return this.authHttp.put(`/api/cat/${cat._id}`, JSON.stringify(cat));
  }

  deleteCat(cat): Observable<any> {
    return this.authHttp.delete(`/api/cat/${cat._id}`);
  }

}
