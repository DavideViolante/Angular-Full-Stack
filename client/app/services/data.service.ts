import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  count(path): Observable<any> {
    return this.http.get(path+'/count').map(res => res.json());
  }

  list(path): Observable<any> {
    return this.http.get(path).map(res => res.json());
  }

  get(path, data): Observable<any> {
    return this.http.get(`${path}/${data._id}`).map(res => res.json());
  }

  post(path, data): Observable<any> {
    return this.http.post(path, JSON.stringify(data), this.options);
  }

  put(path, data): Observable<any> {
    return this.http.put(`${path}/${data._id}`, JSON.stringify(data), this.options);
  }

  delete(path, data): Observable<any> {
    return this.http.delete(`${path}/${data._id}`, this.options);
  }

}
