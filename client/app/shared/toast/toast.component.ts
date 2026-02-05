import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  imports: [CommonModule],
})
export class ToastComponent {
  private toastService = inject(ToastService);
  message = () => this.toastService.message();
}
