import { Component, OnInit } from '@angular/core';

import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  users = [];
  isLoading = true;

  constructor(public auth: AuthService,
              public toast: ToastComponent,
              private dataService: DataService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.dataService.list('/api/users').subscribe(
      data => this.users = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  deleteUser(user) {
    this.dataService.delete('/api/user', user).subscribe(
      data => this.toast.setMessage('User deleted successfully.', 'success'),
      error => console.log(error),
      () => this.getUsers()
    );
  }

}
