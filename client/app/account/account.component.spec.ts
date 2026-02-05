import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';

import { AccountComponent } from './account.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { User } from '../shared/models/user.model';

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
        AuthService,
        ToastComponent,
        { provide: UserService, useClass: UserServiceMock },
        { provide: JWT_OPTIONS, useValue: {} }, JwtHelperService
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

  it('should render the header', async () => {
    expect(compiled.querySelector('.card-header')?.textContent).toContain('Account settings');
  });

  it('should display the username and email inputs filled', async () => {
    const inputs = compiled.querySelectorAll('input');
    expect(inputs[0].value).toContain('Test user');
    expect(inputs[1].value).toContain('test@example.com');
  });

  it('should display the save button enabled', async () => {
    const button = compiled.querySelector('button');
    expect(button).toBeTruthy();
    expect(button?.disabled).toBeFalsy();
  });
});
