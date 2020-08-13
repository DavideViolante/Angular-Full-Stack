// @angular
import { NgModule ,  CUSTOM_ELEMENTS_SCHEMA }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';

// module
import { AppRoutingModule }     from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// components
import { AppComponent }         from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { NotFoundComponent } from './not-found/not-found.component';
// Services
import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';

// nebular 
import { NbThemeModule } from '@nebular/theme';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: (): string => localStorage.getItem('token'),
        // whitelistedDomains: ['localhost:3000', 'localhost:4200']
      }
    }),
    NbThemeModule.forRoot()
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
  
  ],
  declarations: [
    AppComponent,
    CatsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    NotFoundComponent
  ],
  providers : [ AuthService,
    AuthGuardLogin,
    CatService,
    UserService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [ AppComponent ]
  
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
