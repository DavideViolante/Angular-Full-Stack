import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CatBreedService } from '../services/catBreed.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { CatBreed } from '../shared/models/catBreed.model';

@Component({
  
  templateUrl: './catsBreed.component.html',
  styleUrls: ['./catsBreed.component.css']
})
export class CatsBreedComponent implements OnInit {
  catBreeds: CatBreed[] = [] ;
  catBreed = new CatBreed();
  isLoading: boolean = true;
  isEditing: boolean = false;
  addCatBreedForm: FormGroup;
  name = new FormControl('', Validators.required);

  constructor(private catBreedService: CatBreedService, private formBuilder: FormBuilder , private toast: ToastComponent){

  }
  
  ngOnInit() {
    this.getCatBreeds();
    this.addCatBreedForm = this.formBuilder.group({
      name: this.name
    });
    
  }
  getCatBreeds(){
    return this.catBreedService.getCatBreeds().subscribe(
            data => this.catBreeds = data,
            error => console.log(error),
            () => this.isLoading = false
    );
  }
  addCatBreed(){
    return this.catBreedService.addCatBreed(this.addCatBreedForm.value).subscribe(
        response => {
          this.catBreeds.push(response);
          this.addCatBreedForm.reset();
          this.toast.setMessage('item added successfully.', 'success');
          },
          error => console.log(error)
    );
  }
  enableEditing(catBreed: CatBreed){
    this.isEditing = true;
    this.catBreed = catBreed;
  }
  deleteCatBreed(catBreed : CatBreed){
    if(window.confirm('Are you sure you want to permanently delete this item?')){
      this.catBreedService.deleteCatBreed(catBreed).subscribe(
       () => {
          const pos = this.catBreeds.map(elem =>elem._id).indexOf(catBreed._id);
          this.catBreeds.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }
  editCatBreed(catBreed: CatBreed){
    this.catBreedService.editCatBreed(catBreed).subscribe(
      ()=>{
        this.isEditing = false;
        this.catBreed = catBreed;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }
  cancelEditing() {
    this.isEditing = false;
    this.catBreed = new CatBreed();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the catBrreds to reset the editing
    this.getCatBreeds();
  }
}
