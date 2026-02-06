import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { AccountComponent } from './account.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { ToastService } from '../shared/toast/toast.service';
import { User } from '../shared/models/user.model';

class AuthServiceMock {
  currentUser = signal<User>(new User());
}
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
  let fixture: ComponentFixture<AccountComponent>;
  let compiled: HTMLElement;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [AccountComponent],
      providers: [
        ToastService,
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: UserService, useClass: UserServiceMock },
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AccountComponent);
    compiled = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  it('should create the account component', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the header', () => {
    expect(compiled.querySelector('.card-header')?.textContent).toContain('Account settings');
  });

  it('should display the username and email inputs filled', () => {
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
