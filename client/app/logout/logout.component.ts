import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.logout();
  }
}
