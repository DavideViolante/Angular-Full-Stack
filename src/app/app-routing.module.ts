// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Services
import { AuthGuardLogin } from './services/auth-guard-login.service';
// Components
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
 // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: '', component: AboutComponent },
 { path: 'cats', component: CatsComponent },
 { path: 'register', component: RegisterComponent },
 { path: 'login', component: LoginComponent },
 { path: 'logout', component: LogoutComponent },
 { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },

 { path: 'notfound', component: NotFoundComponent },
 { path: '**', redirectTo: '/notfound' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
