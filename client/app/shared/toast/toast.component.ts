import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() message = { body: '', type: '' };

  setMessage(body: string, type: string, time = 3000): void {
    this.message.body = body;
    this.message.type = type;
    setTimeout(() => this.message.body = '', time);
  }
}
