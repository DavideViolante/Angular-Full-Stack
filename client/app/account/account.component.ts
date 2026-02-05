import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { ToastService } from '../shared/toast/toast.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  imports: [FormsModule, ToastComponent, LoadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent implements OnInit {
  private auth = inject(AuthService);
  private toast = inject(ToastService);
  private userService = inject(UserService);

  user = signal<User>(new User());
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.isLoading.set(true);
    this.userService.getUser(this.auth.currentUser()).subscribe({
      next: data => this.user.set(data),
      error: error => console.error(error),
      complete: () => this.isLoading.set(false)
    });
  }

  save(): void {
    const user = this.user();
    this.userService.editUser(user).subscribe({
      next: res => {
        this.toast.setMessage('Account settings saved!', 'success');
        const decodedUser = this.auth.decodeUserFromToken(res.token);
        this.auth.setCurrentUser(decodedUser);
        localStorage.setItem('token', res.token);
      },
      error: error => console.error(error)
    });
  }

  updateUserField(field: string, value: string) {
    this.user.update(u => ({ ...u, [field]: value }));
  }

}
