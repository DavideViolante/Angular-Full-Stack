import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CatService {

  constructor(private http: HttpClient) { }

  getCats(): Observable<any> {
    return this.http.get('/api/cats');
  }

  countCats(): Observable<any> {
    return this.http.get('/api/cats/count');
  }

  addCat(cat): Observable<any> {
    return this.http.post('/api/cat', JSON.stringify(cat));
  }

  getCat(cat): Observable<any> {
    return this.http.get(`/api/cat/${cat._id}`);
  }

  editCat(cat): Observable<any> {
    return this.http.put(`/api/cat/${cat._id}`, JSON.stringify(cat));
  }

  deleteCat(cat): Observable<any> {
    return this.http.delete(`/api/cat/${cat._id}`);
  }

}
