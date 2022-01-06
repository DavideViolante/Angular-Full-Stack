import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() message = { body: '', type: '' };
  existingTimeout = 0;

  setMessage(body: string, type: string, time = 3000): void {
    if (this.existingTimeout) {
      clearTimeout(this.existingTimeout);
    }
    this.message.body = body;
    this.message.type = type;
    this.existingTimeout = window.setTimeout(() => this.message.body = '', time);
  }
}
