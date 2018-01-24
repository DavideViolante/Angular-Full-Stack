import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

import { CatBreed } from '../shared/models/catBreed.model';

@Injectable()
export class CatBreedService {
    constructor(private http: HttpClient){

    }
    addCatBreed(catBreed: CatBreed): Observable<CatBreed> {
        return this.http.post('/api/catbreed', catBreed);
    }
    getCatBreeds(): Observable<CatBreed[]>{
        return this.http.get<CatBreed[]>('/api/catbreeds');
    }
   
    deleteCatBreed(catBreed: CatBreed):Observable<string>{
        return this.http.delete(`/api/catbreed/${catBreed._id}`, {responseType: 'text'});
    }
    editCatBreed(catBreed: CatBreed): Observable<string>{
        return this.http.put(`/api/catbreed/${catBreed._id}`, catBreed, {responseType: 'text'});
    }
}
