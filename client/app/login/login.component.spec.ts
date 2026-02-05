import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, UntypedFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

import { ToastService } from '../shared/toast/toast.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { LoginComponent } from './login.component';

describe('Component: Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let compiled: HTMLElement;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, FormsModule, ReactiveFormsModule],
      providers: [
        UntypedFormBuilder,
        ToastService,
        AuthService,
        UserService,
        JwtHelperService, { provide: JWT_OPTIONS, useValue: {} }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page header text', () => {
    const header = compiled.querySelector('.card-header');
    expect(header?.textContent).toContain('Login');
  });

  it('should display the username and password inputs', () => {
    const inputs = compiled.querySelectorAll('input');
    expect(inputs[0]).toBeTruthy();
    expect(inputs[1]).toBeTruthy();
    expect(inputs[0].value).toBeFalsy();
    expect(inputs[1].value).toBeFalsy();
  });

  it('should display the login button', () => {
    const button = compiled.querySelector('button');
    expect(button).toBeTruthy();
    expect(button?.textContent).toContain('Login');
    expect(button?.disabled).toBeTruthy();
  });

});
