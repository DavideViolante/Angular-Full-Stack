import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';

describe('Component: App', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let authService: AuthService;
  let authServiceStub: {
    loggedIn: boolean,
    isAdmin: boolean,
    currentUser: any
  };

  beforeEach(async(() => {
    authServiceStub = {
      loggedIn: false,
      isAdmin: false,
      currentUser: { username: 'Tester' }
    };
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [ { provide: AuthService, useValue: authServiceStub } ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      authService = fixture.debugElement.injector.get(AuthService);
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should display the navigation bar correctly for guests', () => {
    const de = fixture.debugElement.queryAll(By.css('a'));
    expect(de.length).toBe(4);
    expect(de[0].nativeElement.textContent).toContain('Home');
    expect(de[1].nativeElement.textContent).toContain('Cats');
    expect(de[2].nativeElement.textContent).toContain('Login');
    expect(de[3].nativeElement.textContent).toContain('Register');
    expect(de[0].attributes['routerLink']).toBe('/');
    expect(de[1].attributes['routerLink']).toBe('/cats');
    expect(de[2].attributes['routerLink']).toBe('/login');
    expect(de[3].attributes['routerLink']).toBe('/register');
  });

  it('should display the navigation bar correctly for logged users', () => {
    authService.loggedIn = true;
    fixture.detectChanges();
    const de = fixture.debugElement.queryAll(By.css('a'));
    expect(de.length).toBe(4);
    expect(de[0].nativeElement.textContent).toContain('Home');
    expect(de[1].nativeElement.textContent).toContain('Cats');
    expect(de[2].nativeElement.textContent).toContain('Account (Tester)');
    expect(de[3].nativeElement.textContent).toContain('Logout');
    expect(de[0].attributes['routerLink']).toBe('/');
    expect(de[1].attributes['routerLink']).toBe('/cats');
    expect(de[2].attributes['routerLink']).toBe('/account');
    expect(de[3].attributes['routerLink']).toBe('/logout');
  });

  it('should display the navigation bar correctly for admin users', () => {
    authService.loggedIn = true;
    authService.isAdmin = true;
    fixture.detectChanges();
    const de = fixture.debugElement.queryAll(By.css('a'));
    expect(de.length).toBe(5);
    expect(de[0].nativeElement.textContent).toContain('Home');
    expect(de[1].nativeElement.textContent).toContain('Cats');
    expect(de[2].nativeElement.textContent).toContain('Account (Tester)');
    expect(de[3].nativeElement.textContent).toContain('Admin');
    expect(de[4].nativeElement.textContent).toContain('Logout');
    expect(de[0].attributes['routerLink']).toBe('/');
    expect(de[1].attributes['routerLink']).toBe('/cats');
    expect(de[2].attributes['routerLink']).toBe('/account');
    expect(de[3].attributes['routerLink']).toBe('/admin');
    expect(de[4].attributes['routerLink']).toBe('/logout');
  });

});
