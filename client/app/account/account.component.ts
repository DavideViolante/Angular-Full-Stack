import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  user: User = new User();
  isLoading = true;

  constructor(private auth: AuthService,
              public toast: ToastComponent,
              private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser(this.auth.currentUser).subscribe({
      next: data => this.user = data,
      error: error => console.log(error),
      complete: () => this.isLoading = false
    });
  }

  save(user: User): void {
    this.userService.editUser(user).subscribe({
      next: res => {
        this.toast.setMessage('Account settings saved!', 'success');
        this.auth.currentUser = user;
        this.auth.isAdmin = user.role === 'admin';
      },
      error: error => console.log(error)
    });
  }

}
