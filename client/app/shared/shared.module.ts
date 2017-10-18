import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './toast/toast.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    // Shared Modules
    // Shared Components
    ToastComponent,
    LoadingComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ToastComponent,
    LoadingComponent
  ],
  providers: [
    ToastComponent
  ]
})
export class SharedModule { }
