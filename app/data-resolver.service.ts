import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs/Observable';

@Injectable()

// https://angular.io/docs/ts/latest/guide/router.html#!#resolve-guard
// https://angular.io/docs/ts/latest/api/router/index/Resolve-interface.html
export class DataResolver implements Resolve<Observable<any>> {
    
    constructor(private http: Http) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    	return this.http.get("/cats").map(res => res.json());
    }
}