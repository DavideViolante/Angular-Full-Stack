import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';
import { User } from '../shared/models/user.model';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { AccountComponent } from './account.component';
import { of, Observable } from 'rxjs';

class AuthServiceMock { }

class UserServiceMock {
  mockUser = {
    username: 'Test user',
    email: 'test@example.com',
    role: 'user'
  };
  getUser(): Observable<User> {
    return of(this.mockUser);
  }
}

describe('Component: Account', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AccountComponent ],
      providers: [
        ToastComponent,
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: UserService, useClass: UserServiceMock },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.user = {
      username: 'Test user',
      email: 'test@example.com'
    };
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page header text', () => {
    const header = compiled.querySelector('.card-header');
    expect(header?.textContent).toContain('Account settings');
  });

  it('should display the username and email inputs filled', async () => {
    await fixture.whenStable();
    const inputs = compiled.querySelectorAll('input');
    expect(inputs[0].value).toContain('Test user');
    expect(inputs[1].value).toContain('test@example.com');
  });

  it('should display the save button enabled', () => {
    const button = compiled.querySelector('button');
    expect(button).toBeTruthy();
    expect(button?.disabled).toBeFalsy();
  });

});
