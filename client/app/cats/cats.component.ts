import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CatService } from '../services/cat.service';
import { ToastService } from '../shared/toast/toast.service';
import { LoadingComponent } from '../shared/loading/loading.component';
import { ToastComponent } from '../shared/toast/toast.component';
import { AddCatFormComponent } from '../add-cat-form/add-cat-form.component';
import { Cat } from '../shared/models/cat.model';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
  imports: [FormsModule, AddCatFormComponent, ToastComponent, LoadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatsComponent implements OnInit {
  private catService = inject(CatService);
  private toast = inject(ToastService);

  cat = signal<Cat>(new Cat());
  cats = signal<Cat[]>([]);
  isLoading = signal<boolean>(true);
  isEditing = signal<boolean>(false);

  catsCount = computed(() => this.cats().length);

  ngOnInit(): void {
    this.getCats();
  }

  getCats(): void {
    this.isLoading.set(true);
    this.catService.getCats().subscribe({
      next: data => this.cats.set(data),
      error: error => console.error(error),
      complete: () => this.isLoading.set(false)
    });
  }

  enableEditing(cat: Cat): void {
    this.isEditing.set(true);
    this.cat.set({ ...cat });
  }

  cancelEditing(event: Event): void {
    event.preventDefault(); // Prevent triggering submit
    this.isEditing.set(false);
    this.cat.set(new Cat());
    this.toast.setMessage('Item editing cancelled.', 'warning');
  }

  editCat(cat: Cat): void {
    this.catService.editCat(cat).subscribe({
      next: () => {
        this.isEditing.set(false);
        this.cat.set(cat);
        this.toast.setMessage('Item edited successfully.', 'success');
        this.cats.update(items => items.map(item => item._id === cat._id ? cat : item));
      },
      error: error => console.error(error)
    });
  }

  deleteCat(cat: Cat): void {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.catService.deleteCat(cat).subscribe({
        next: () => {
          this.cats.update(list => list.filter(elem => elem._id !== cat._id));
          this.toast.setMessage('Item deleted successfully.', 'success');
        },
        error: error => console.error(error)
      });
    }
  }

  onCatAdded(newCat: Cat): void {
    this.cats.update(list => [...list, newCat]);
  }

  updateCatField(field: string, value: string) {
    this.cat.update(c => ({ ...c, [field]: value }));
  }

}
