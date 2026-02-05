import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { App } from './app';
import { UserService } from './services/user.service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterTestingModule], // @todo replace deprecated
      providers: [UserService, { provide: JWT_OPTIONS, useValue: {} }, JwtHelperService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render nav links', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = compiled.querySelectorAll('.nav-link');
    expect(navLinks[0]?.textContent).toContain('Home');
    expect(navLinks[1]?.textContent).toContain('Cats');
    // @todo test nav links if logged in or not
  });
});
