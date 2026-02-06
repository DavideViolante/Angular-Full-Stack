import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { App } from './app';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { ToastService } from './shared/toast/toast.service';
import { User } from './shared/models/user.model';

class AuthServiceMock {
  currentUser = signal<User>({ _id: '1', username: 'test1@example.com', role: 'user' });
  loggedIn = signal<boolean>(true);
  isAdmin = signal<boolean>(false);
  
  login(): void {
    this.loggedIn.set(true);
  }
  logout(): void {
    this.loggedIn.set(false);
  }
}

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let compiled: HTMLElement;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterTestingModule], // @todo replace deprecated
      providers: [
        ToastService,
        UserService,
        { provide: AuthService, useClass: AuthServiceMock },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    compiled = fixture.nativeElement as HTMLElement;
    authService = fixture.debugElement.injector.get(AuthService);
    await fixture.whenStable();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render nav links', () => {
    authService.loggedIn.set(false);
    fixture.detectChanges();
    expect(authService.loggedIn()).toBeFalsy();
    const navLinks = compiled.querySelectorAll('.nav-link');
    expect(navLinks[0]?.textContent).toContain('Home');
    expect(navLinks[1]?.textContent).toContain('Cats');
    expect(navLinks[2]?.textContent).toContain('Login');
    expect(navLinks[3]?.textContent).toContain('Register');
  });

  it('should render nav links as logged in', () => {
    authService.loggedIn.set(true);
    fixture.detectChanges();
    expect(authService.loggedIn()).toBeTruthy();
    const navLinks = compiled.querySelectorAll('.nav-link');
    expect(navLinks[0]?.textContent).toContain('Home');
    expect(navLinks[1]?.textContent).toContain('Cats');
    expect(navLinks[2]?.textContent).toContain('Account');
    expect(navLinks[3]?.textContent).toContain('Logout');
  });
  
  it('should render nav links as logged in as admin', () => {
    authService.loggedIn.set(true);
    authService.isAdmin.set(true);
    fixture.detectChanges();
    expect(authService.loggedIn()).toBeTruthy();
    expect(authService.isAdmin()).toBeTruthy();
    const navLinks = compiled.querySelectorAll('.nav-link');
    expect(navLinks[0]?.textContent).toContain('Home');
    expect(navLinks[1]?.textContent).toContain('Cats');
    expect(navLinks[2]?.textContent).toContain('Account');
    expect(navLinks[3]?.textContent).toContain('Admin');
    expect(navLinks[4]?.textContent).toContain('Logout');
  });
  
});
