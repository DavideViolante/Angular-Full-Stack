import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ResourceResult } from 'ngx-resource';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {CatResource} from '../shared/resources/cat.resource';
import {CatsResource} from '../shared/resources/cats.resource';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Accept': '*', 'Content-Type': 'application/json', 'charset': 'UTF-8' });

  constructor(private catResource: CatResource, private catsResource: CatsResource) {
    catResource.setHeaders(this.headers);
    catsResource.setHeaders(this.headers);
  }

  getCats(): Observable<any> {
    return this.catsResource.query().$observable;
  }

  countCats(): Observable<any> {
    return this.catsResource.get().$observable;
  }

  addCat(cat): Observable<any> {
    return this.catResource.save(cat).$observable;
  }

  getCat(cat): Observable<any> {
    return this.catResource.get({id: cat._id}).$observable;
  }

  editCat(cat): Observable<any> {
    return this.catResource.update({id: cat._id}).$observable;
  }

  deleteCat(cat): Observable<any> {
    return this.catResource.remove({id: cat._id}).$observable;
  }

}
