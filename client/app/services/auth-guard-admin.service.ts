import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardAdmin implements CanActivate {

  constructor(public auth: AuthService) {}

  canActivate() {
    return this.auth.isAdmin;
  }

}
