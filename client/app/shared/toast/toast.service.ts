import { Injectable, signal } from '@angular/core';

interface ToastReq {
  body: string;
  type: string;
}

@Injectable()
export class ToastService {
  private _message = signal<ToastReq | null>(null);
  message = () => this._message();

  private existingTimeout = 0;

  setMessage(body: string, type: string, time = 3000): void {
    if (this.existingTimeout) {
      clearTimeout(this.existingTimeout);
    }
    this._message.set({ body, type });
    this.existingTimeout = window.setTimeout(() => this._message.set(null), time);
  }

  clear(): void {
    if (this.existingTimeout) {
      clearTimeout(this.existingTimeout);
    }
    this._message.set(null);
  }
}
