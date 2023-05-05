import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, UntypedFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from './login.component';

class AuthServiceMock { }
class RouterMock { }

describe('Component: Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ LoginComponent ],
      providers: [
        UntypedFormBuilder, ToastComponent,
        { provide: Router, useClass: RouterMock },
        { provide: AuthService, useClass: AuthServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
