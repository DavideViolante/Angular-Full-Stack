import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { LogoutComponent } from './logout.component';

class AuthServiceMock {
  loggedIn = signal<boolean>(true);
  logout(): void {
    this.loggedIn.set(false);
  }
}

describe('Component: Logout', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  let authService: AuthService;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [LogoutComponent],
      providers: [{ provide: AuthService, useClass: AuthServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout the user', () => {
    authService.loggedIn.set(true);
    expect(authService.loggedIn()).toBeTruthy();
    authService.logout();
    expect(authService.loggedIn()).toBeFalsy();
  });

});
