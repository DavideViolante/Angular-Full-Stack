import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastComponent } from '../shared/toast/toast.component';
import { UserService } from '../services/user.service';
import { RegisterComponent } from './register.component';

class RouterMock { }
class UserServiceMock { }

describe('Component: Register', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ RegisterComponent ],
      providers: [
        ToastComponent,
        { provide: Router, useClass: RouterMock },
        { provide: UserService, useClass: UserServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page header text', () => {
    const header = compiled.querySelector('.card-header');
    expect(header?.textContent).toContain('Register');
  });

  it('should display the username, email and password inputs', () => {
    const inputs = compiled.querySelectorAll('input');
    expect(inputs[0]).toBeTruthy();
    expect(inputs[1]).toBeTruthy();
    expect(inputs[2]).toBeTruthy();
    expect(inputs[0].value).toBeFalsy();
    expect(inputs[1].value).toBeFalsy();
    expect(inputs[2].value).toBeFalsy();
  });

  it('should display the register button', () => {
    const button = compiled.querySelector('button');
    expect(button).toBeTruthy();
    expect(button?.textContent).toContain('Register');
    expect(button?.disabled).toBeTruthy();
  });

});
