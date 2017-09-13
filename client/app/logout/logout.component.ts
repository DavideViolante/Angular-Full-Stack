import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  template: '',
  styles: ['']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.logout();
  }

}
