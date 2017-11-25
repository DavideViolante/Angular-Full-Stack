import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Cat } from '../shared/models/cat.model';

@Injectable()
export class CatService {

  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>('/api/cats');
  }

  countCats(): Observable<any> {
    return this.http.get('/api/cats/count');
  }

  addCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>('/api/cat', cat);
  }

  getCat(cat: Cat): Observable<Cat> {
    return this.http.get<Cat>(`/api/cat/${cat._id}`);
  }

  editCat(cat: Cat): Observable<Cat> {
    return this.http.put<Cat>(`/api/cat/${cat._id}`, cat);
  }

  deleteCat(cat: Cat): Observable<Cat> {
    return this.http.delete<Cat>(`/api/cat/${cat._id}`);
  }

}
