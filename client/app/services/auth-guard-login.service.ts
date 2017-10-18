import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardLogin implements CanActivate {

  constructor(public auth: AuthService, private router: Router) {}

  canActivate() {
    if (!this.auth.loggedIn) {
      this.router.navigate(['/']);
      return false;
    } else {
      return this.auth.loggedIn;
    }
  }

}
