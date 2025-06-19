import { Injectable, inject } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardLogin  {
  auth = inject(AuthService);


  canActivate(): boolean {
    return this.auth.loggedIn;
  }

}
