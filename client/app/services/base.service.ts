import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export abstract class Entity<T extends { _id?: string }> {
  abstract SingularAPI: string;
  abstract PluralAPI: string;

  constructor(protected http: HttpClient) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`/api/${this.PluralAPI}`);
  }

  countAll(): Observable<number> {
    return this.http.get<number>(`/api/${this.PluralAPI}/count`);
  }

  add(object: T): Observable<T> {
    return this.http.post<T>(`/api/${this.SingularAPI}`, object);
  }

  get(object: T): Observable<T> {
    return this.http.get<T>(`/api/${this.SingularAPI}/${object._id}`);
  }

  edit(object: T): Observable<string> {
    return this.http.put(`/api/${this.SingularAPI}/${object._id}`, object, { responseType: 'text' });
  }

  delete(object: T): Observable<string> {
    return this.http.delete(`/api/${this.SingularAPI}/${object._id}`, { responseType: 'text' });
  }


}
