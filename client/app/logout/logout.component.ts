import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  template: '',
  standalone: false
})
export class LogoutComponent implements OnInit {
  private auth = inject(AuthService);


  ngOnInit(): void {
    this.auth.logout();
  }

}
