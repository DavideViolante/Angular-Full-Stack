import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
	selector: 'home',
	templateUrl: 'app/home.component.html',
	directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent implements OnInit {

	private cats = [];
	private options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' }) });

	private isEditing = false;
	private cat = {};

	private workaround = true;

	constructor(private http: Http) { }

	ngOnInit() {
		this.http.get("/cats").map(res => res.json()).subscribe(
			data => this.cats = data,
			error => console.log(error)
		);
	}

	toggleEdit(cat) {
		if(!this.isEditing) {
			// edit button pressed
			this.cat = cat;
		} else {
			// cancel button pressed
			this.http.get("/cats").map(res => res.json()).subscribe(
				data => this.cats = data,
				error => console.log(error)
			);
		}
		this.isEditing = !this.isEditing;
	}

	submitEdit(cat) {
		this.http.put("/cat/"+cat._id, JSON.stringify(cat), this.options).subscribe();
		this.isEditing = false;
		this.cat = cat;
	}

	submitRemove(cat) {
		if(window.confirm("Are you sure you want to permanently delete this item?")) {
			this.http.delete("/cat/"+cat._id, this.options).subscribe();
			var pos = this.cats.map((e) => { return e._id }).indexOf(cat._id);
			this.cats.splice(pos, 1);
		}
	}

	submitCreate(cat) {
		this.http.post("/cat", JSON.stringify(cat), this.options).subscribe(
			data => this.cats.push(data.json()),
			error => console.log(error)
		);
		// workaround to reset the form values
		this.workaround = false;
		setTimeout(() => this.workaround = true, 0);
	}
}
