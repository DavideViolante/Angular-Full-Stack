import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardAdmin  {

  constructor(public auth: AuthService) {}

  canActivate(): boolean {
    return this.auth.isAdmin;
  }

}
