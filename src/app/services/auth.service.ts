import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

import { UserService } from './user.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { User } from '../shared/models/user.model';

@Injectable()
export class AuthService {
  loggedIn = false;
  isAdmin = false;

  currentUser: User = new User();

  constructor(
    private userService: UserService,
    private router: Router,
    private jwtHelper: JwtHelperService,
    public toast: ToastComponent,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedUser = this.decodeUserFromToken(token);
        this.setCurrentUser(decodedUser);
      }
    }
  }

  login(emailAndPassword): void {
    this.userService.login(emailAndPassword).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        const decodedUser = this.decodeUserFromToken(res.token);
        this.setCurrentUser(decodedUser);
        this.loggedIn = true;
        this.router.navigate(['/']);
      },
      (error) => this.toast.setMessage('invalid email or password!', 'danger')
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.isAdmin = false;
    this.currentUser = new User();
    this.router.navigate(['/']);
  }

  decodeUserFromToken(token): object {
    return this.jwtHelper.decodeToken(token).user;
  }

  setCurrentUser(decodedUser): void {
    this.loggedIn = true;
    this.currentUser._id = decodedUser._id;
    this.currentUser.username = decodedUser.username;
    this.currentUser.role = decodedUser.role;
    this.isAdmin = decodedUser.role === 'admin';
    delete decodedUser.role;
  }
}
