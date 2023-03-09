import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';

class AuthServiceMock { }

describe('Component: App', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let authService: AuthService;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ AppComponent ],
      providers: [ { provide: AuthService, useClass: AuthServiceMock } ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', waitForAsync(() => {
    expect(component).toBeTruthy();
  }));

  it('should display the navigation bar correctly for guests', () => {
    const elems = compiled.querySelectorAll('.nav-link');
    expect(elems.length).toBe(4);
    expect(elems[0].textContent).toContain('Home');
    expect(elems[1].textContent).toContain('Cats');
    expect(elems[2].textContent).toContain('Login');
    expect(elems[3].textContent).toContain('Register');
  });

  it('should display the navigation bar correctly for logged users', () => {
    authService.loggedIn = true;
    authService.currentUser = { _id: '123', username: 'Tester', role: 'user' };
    fixture.detectChanges();
    const elems = compiled.querySelectorAll('.nav-link');
    expect(elems.length).toBe(4);
    expect(elems[0].textContent).toContain('Home');
    expect(elems[1].textContent).toContain('Cats');
    expect(elems[2].textContent).toContain('Account (Tester)');
    expect(elems[3].textContent).toContain('Logout');
  });

  it('should display the navigation bar correctly for admin users', () => {
    authService.loggedIn = true;
    authService.isAdmin = true;
    authService.currentUser = { _id: '123', username: 'Tester', role: 'admin' };
    fixture.detectChanges();
    const elems = compiled.querySelectorAll('.nav-link');
    expect(elems.length).toBe(5);
    expect(elems[0].textContent).toContain('Home');
    expect(elems[1].textContent).toContain('Cats');
    expect(elems[2].textContent).toContain('Account (Tester)');
    expect(elems[3].textContent).toContain('Admin');
    expect(elems[4].textContent).toContain('Logout');
  });

});
