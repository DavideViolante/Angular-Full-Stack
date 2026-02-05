import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';

import { ToastComponent } from '../shared/toast/toast.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { ToastService } from '../shared/toast/toast.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  imports: [ToastComponent, LoadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent implements OnInit {
  auth = inject(AuthService);
  private toast = inject(ToastService);
  private userService = inject(UserService);

  users = signal<User[]>([]);
  isLoading = signal<boolean>(true);

  usersCount = computed(() => this.users().length);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.isLoading.set(true);
    this.userService.getUsers().subscribe({
      next: data => this.users.set(data),
      error: error => console.error(error),
      complete: () => this.isLoading.set(false)
    });
  }

  deleteUser(user: User): void {
    if (window.confirm(`Are you sure you want to delete ${user.username}?`)) {
      this.userService.deleteUser(user).subscribe({
        next: () => this.toast.setMessage(`User ${user.username} deleted successfully.`, 'success'),
        error: error => console.error(error),
        complete: () => this.getUsers()
      });
    }
  }

}
