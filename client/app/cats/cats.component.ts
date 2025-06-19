import { Component, OnInit, inject } from '@angular/core';

import { CatService } from '../services/cat.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Cat } from '../shared/models/cat.model';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
  standalone: false
})
export class CatsComponent implements OnInit {
  private catService = inject(CatService);
  toast = inject(ToastComponent);


  cat = new Cat();
  cats: Cat[] = [];
  isLoading = true;
  isEditing = false;

  ngOnInit(): void {
    this.getCats();
  }

  getCats(): void {
    this.catService.getCats().subscribe({
      next: data => this.cats = data,
      error: error => console.log(error),
      complete: () => this.isLoading = false
    });
  }

  enableEditing(cat: Cat): void {
    this.isEditing = true;
    this.cat = cat;
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.cat = new Cat();
    this.toast.setMessage('Item editing cancelled.', 'warning');
    // reload the cats to reset the editing
    this.getCats();
  }

  editCat(cat: Cat): void {
    this.catService.editCat(cat).subscribe({
      next: () => {
        this.isEditing = false;
        this.cat = cat;
        this.toast.setMessage('Item edited successfully.', 'success');
      },
      error: error => console.log(error)
    });
  }

  deleteCat(cat: Cat): void {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.catService.deleteCat(cat).subscribe({
        next: () => {
          this.cats = this.cats.filter(elem => elem._id !== cat._id);
          this.toast.setMessage('Item deleted successfully.', 'success');
        },
        error: error => console.log(error)
      });
    }
  }

}
