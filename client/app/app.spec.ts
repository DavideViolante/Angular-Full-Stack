import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { App } from './app';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { ToastService } from './shared/toast/toast.service';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterTestingModule], // @todo replace deprecated
      providers: [
        AuthService,
        ToastService,
        UserService,
        { provide: JWT_OPTIONS, useValue: {} },
        JwtHelperService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    compiled = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render nav links', async () => {
    const navLinks = compiled.querySelectorAll('.nav-link');
    expect(navLinks[0]?.textContent).toContain('Home');
    expect(navLinks[1]?.textContent).toContain('Cats');
    // @todo test nav links if logged in or not
  });
});
