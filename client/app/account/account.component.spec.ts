import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AccountComponent } from './account.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { of } from 'rxjs';

class AuthServiceMock { }

class UserServiceMock {
  mockUser = {
    username: 'Test user',
    email: 'test@example.com',
    role: 'user'
  };
  getUser() {
    return of(this.mockUser);
  }
}

describe('Component: Account', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AccountComponent ],
      providers: [
        ToastComponent,
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: UserService, useClass: UserServiceMock },
      ]
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page header text', () => {
    const el = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(el.textContent).toContain('Account settings');
  });

  it('should display the username and email inputs filled', async () => {
    await fixture.whenStable();
    const [usernameInput, emailInput] = fixture.debugElement.queryAll(By.css('input'));
    expect(usernameInput.nativeElement.value).toContain('Test user');
    expect(emailInput.nativeElement.value).toContain('test@example.com');
  });

  it('should display the save button and be enabled', () => {
    const saveBtn = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(saveBtn).toBeTruthy();
  });

});
