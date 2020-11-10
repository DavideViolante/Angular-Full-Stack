import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ RegisterComponent ],
      providers: [
        ToastComponent,
        { provide: Router, useClass: RouterMock },
        { provide: UserService, useClass: UserServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page header text', () => {
    const el = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(el.textContent).toContain('Register');
  });

  it('should display the username, email and password inputs', () => {
    const [inputUsername, inputEmail, inputPassword] = fixture.debugElement.queryAll(By.css('input'));
    expect(inputUsername.nativeElement).toBeTruthy();
    expect(inputEmail.nativeElement).toBeTruthy();
    expect(inputPassword.nativeElement).toBeTruthy();
    expect(inputUsername.nativeElement.value).toBeFalsy();
    expect(inputEmail.nativeElement.value).toBeFalsy();
    expect(inputPassword.nativeElement.value).toBeFalsy();
  });

  it('should display the register button', () => {
    const el = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(el).toBeTruthy();
    expect(el.textContent).toContain('Register');
    expect(el.disabled).toBeTruthy();
  });

});
