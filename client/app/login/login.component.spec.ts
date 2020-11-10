import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from './login.component';

class AuthServiceMock { }
class RouterMock { }

describe('Component: Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ LoginComponent ],
      providers: [
        FormBuilder, ToastComponent,
        { provide: Router, useClass: RouterMock },
        { provide: AuthService, useClass: AuthServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page header text', () => {
    const el = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(el.textContent).toContain('Login');
  });

  it('should display the username and password inputs', () => {
    const [inputUsername, inputPassword] = fixture.debugElement.queryAll(By.css('input'));
    expect(inputUsername.nativeElement).toBeTruthy();
    expect(inputPassword.nativeElement).toBeTruthy();
    expect(inputUsername.nativeElement.value).toBeFalsy();
    expect(inputPassword.nativeElement.value).toBeFalsy();
  });

  it('should display the login button', () => {
    const el = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(el).toBeTruthy();
    expect(el.textContent).toContain('Login');
    expect(el.disabled).toBeTruthy();
  });

});
