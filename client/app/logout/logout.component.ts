import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  template: '',
  styles: ['']
})
export class LogoutComponent {

  constructor(private auth: AuthService) {
    this.auth.logout();
  }

}
