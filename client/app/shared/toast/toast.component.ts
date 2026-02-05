import { Component, input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  imports: [CommonModule],
})
export class ToastComponent {
  // input value when the component is used in a template: <app-toast [message]="...">
  message = input<{ body: string; type: string }>({ body: '', type: '' });

  // local writable signal representing the currently displayed message.
  private _localMessage = signal<{ body: string; type: string }>({ body: '', type: '' });
  // public accessor used by templates to read the displayed message
  displayedMessage = () => this._localMessage();

  existingTimeout = 0;

  constructor() {
    // Keep local message in sync with any parent-provided input value.
    effect(() => {
      this._localMessage.set(this.message());
    });
  }

  // API used by other parts of the app (they inject the ToastComponent as a service)
  setMessage(body: string, type: string, time = 3000): void {
    if (this.existingTimeout) {
      clearTimeout(this.existingTimeout);
    }
    this._localMessage.set({ body, type });
    this.existingTimeout = window.setTimeout(() => this._localMessage.set({ body: '', type: '' }), time);
  }
}
