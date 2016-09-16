import { Injectable }       from '@angular/core';
import { Http, Headers,
         RequestOptions }   from '@angular/http';

@Injectable()

export class CatService {

    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor (private http: Http) {}

    getCats() {
        return this.http.get('/cats').map(res => res.json());
    }

    addCat(cat) {
        return this.http.post("/cat", JSON.stringify(cat), this.options);
    }

    editCat(cat) {
        return this.http.put(`/cat/${cat._id}`, JSON.stringify(cat), this.options);
    }

    deleteCat(cat) {
        return this.http.delete(`/cat/${cat._id}`, this.options);
    }

}
