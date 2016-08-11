import {Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
	selector: 'home',
	templateUrl: 'app/home.component.html'
})

export class HomeComponent implements OnInit {

	private cats = [];
	private options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' }) });

	private isEditing = false;
	private cat = {};

	private infoMsg = { body: "", type: "info"};

	private addCatForm: FormGroup;
	private name = new FormControl("", Validators.required);
	private age = new FormControl("", Validators.required);
	private weight = new FormControl("", Validators.required);

	constructor(private http: Http, private formBuilder: FormBuilder) {	}

	ngOnInit() {
		this.addCatForm = this.formBuilder.group({
			name: this.name,
			age: this.age,
			weight: this.weight
		});

		this.loadCats();
	}

	loadCats() {
		this.http.get("/cats").map(res => res.json()).subscribe(
			data => this.cats = data,
			error => console.log(error)
		);
	}

	submitAdd() {
		this.http.post("/cat", JSON.stringify(this.addCatForm.value), this.options).subscribe(
			res => {
				this.cats.push(res.json()); // the response contains the new item
				this.sendInfoMsg("item added successfully.", "success");
				this.addCatForm.reset();
			},
			error => console.log(error)
		);
	}

	enableEditing(cat) {
		this.isEditing = true;
		this.cat = cat;
	}

	cancelEditing() {
		this.isEditing = false;
		this.cat = {};
		this.sendInfoMsg("item editing cancelled.", "warning");
		this.loadCats();
	}

	submitEdit(cat) {
		this.http.put("/cat/"+cat._id, JSON.stringify(cat), this.options).subscribe(
			res => {
				this.isEditing = false;
				this.cat = cat;
				this.sendInfoMsg("item edited successfully.", "success");
			},
			error => console.log(error)
		);
	}

	submitRemove(cat) {
		var delOptions = new RequestOptions({
			body: '', // bug of RC5
			headers: new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' })}
		);
		if(window.confirm("Are you sure you want to permanently delete this item?")) {
			this.http.delete("/cat/"+cat._id, delOptions).subscribe(
				res => {
					var pos = this.cats.map((e) => { return e._id }).indexOf(cat._id);
					this.cats.splice(pos, 1);
					this.sendInfoMsg("item deleted successfully.", "success");
				},
				error => console.log(error)
			);
		}
	}

	sendInfoMsg(body, type, time = 3000) {
		this.infoMsg.body = body;
		this.infoMsg.type = type;
		window.setTimeout(() => this.infoMsg.body = "", time);
	}

}