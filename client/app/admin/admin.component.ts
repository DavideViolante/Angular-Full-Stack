import { Component, OnInit, inject } from '@angular/core';

import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  standalone: false
})
export class AdminComponent implements OnInit {
  auth = inject(AuthService);
  toast = inject(ToastComponent);
  private userService = inject(UserService);


  users: User[] = [];
  isLoading = true;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe({
      next: data => this.users = data,
      error: error => console.log(error),
      complete: () => this.isLoading = false
    });
  }

  deleteUser(user: User): void {
    if (window.confirm('Are you sure you want to delete ' + user.username + '?')) {
      this.userService.deleteUser(user).subscribe({
        next: () => this.toast.setMessage('User deleted successfully.', 'success'),
        error: error => console.log(error),
        complete: () => this.getUsers()
      });
    }
  }

}
