import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService, UserService } from '../services';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  user: User;
  isLoading = true;

  constructor(
    private auth: AuthService,
    public toast: ToastComponent,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser(this.auth.currentUser).subscribe(
      (data) => (this.user = data),
      (error) => console.log(error),
      () => (this.isLoading = false)
    );
  }

  save(user: User): void {
    this.userService.editUser(user).subscribe(
      (res) => {
        this.toast.setMessage('account settings saved!', 'success');
        this.auth.currentUser = user;
        this.auth.isAdmin = user.role === 'admin';
      },
      (error) => console.log(error)
    );
  }
}
