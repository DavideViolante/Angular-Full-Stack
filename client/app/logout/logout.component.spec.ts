import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { AuthService } from '../services/auth.service';

class AuthServiceMock {
  loggedIn = true;
  logout() {
    this.loggedIn = false;
  }
}

describe('Component: Logout', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutComponent ],
      providers: [ { provide: AuthService, useClass: AuthServiceMock } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout the user', () => {
    authService.loggedIn = true;
    expect(authService.loggedIn).toBeTruthy();
    authService.logout();
    expect(authService.loggedIn).toBeFalsy();
  });
});
