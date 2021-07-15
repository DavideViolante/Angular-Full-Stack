import { Component, OnInit } from '@angular/core';

import { ToastComponent } from '@shared/components/index';
import { AuthService, UserService } from '@services';
import { User } from '@shared/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  isLoading = true;

  constructor(
    public auth: AuthService,
    public toast: ToastComponent,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => (this.users = data),
      (error) => console.log(error),
      () => (this.isLoading = false)
    );
  }

  deleteUser(user: User): void {
    if (
      window.confirm('Are you sure you want to delete ' + user.username + '?')
    ) {
      this.userService.deleteUser(user).subscribe(
        (data) =>
          this.toast.setMessage('user deleted successfully.', 'success'),
        (error) => console.log(error),
        () => this.getUsers()
      );
    }
  }
}
