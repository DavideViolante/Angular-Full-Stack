import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

import { UserService } from './user.service';
import { User } from '../shared/models/user.model';

@Injectable()
export class AuthService {
  private userService = inject(UserService);
  private router = inject(Router);
  private jwtHelper = inject(JwtHelperService);

  loggedIn = signal<boolean>(false);
  isAdmin = signal<boolean>(false);
  currentUser = signal<User>(new User());

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
        this.router.navigate(['/']);
      },
      // error: () => this.toast.setMessage('Invalid email or password!', 'danger')
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.set(false);
    this.isAdmin.set(false);
    this.currentUser.set(new User());
    this.router.navigate(['/']);
  }

  decodeUserFromToken(token: string): User {
    return this.jwtHelper.decodeToken(token).user;
  }

  setCurrentUser(decodedUser: User): void {
    this.loggedIn.set(true);
    this.currentUser.set(decodedUser);
    this.isAdmin.set(decodedUser.role === 'admin');
  }

}
