import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

import { UserService } from './user.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { User } from '../shared/models/user.model';

@Injectable()
export class AuthService {
  private userService = inject(UserService);
  private router = inject(Router);
  private jwtHelper = inject(JwtHelperService);
  toast = inject(ToastComponent);

  loggedIn = false;
  isAdmin = false;

  currentUser: User = new User();

  constructor() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }

  login(emailAndPassword: { email: string; password: string }): void {
    this.userService.login(emailAndPassword).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        const decodedUser = this.decodeUserFromToken(res.token);
        this.setCurrentUser(decodedUser);
        this.loggedIn = true;
        this.router.navigate(['/']);
      },
      error: () => this.toast.setMessage('Invalid email or password!', 'danger')
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.isAdmin = false;
    this.currentUser = new User();
    this.router.navigate(['/']);
  }

  decodeUserFromToken(token: string): object {
    return this.jwtHelper.decodeToken(token).user;
  }

  setCurrentUser(decodedUser: User): void {
    this.loggedIn = true;
    this.currentUser._id = decodedUser._id;
    this.currentUser.username = decodedUser.username;
    this.currentUser.role = decodedUser.role;
    this.isAdmin = decodedUser.role === 'admin';
    delete decodedUser.role;
  }

}
