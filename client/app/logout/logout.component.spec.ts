import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from '../services/auth.service';
import { LogoutComponent } from './logout.component';

class AuthServiceMock {
  loggedIn = true;
  logout(): void {
    this.loggedIn = false;
  }
}

describe('Component: Logout', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  let authService: AuthService;

  beforeEach(waitForAsync(() => {
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
