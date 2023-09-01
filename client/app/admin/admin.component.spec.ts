import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { AdminComponent } from './admin.component';
import { of, Observable } from 'rxjs';

class AuthServiceMock {
  currentUser = { _id: '1', username: 'test1@example.com', role: 'admin' };
}

class UserServiceMock {
  mockUsers = [
    { _id: '1', username: 'Test 1', email: 'test1@example.com', role: 'admin' },
    { _id: '2', username: 'Test 2', email: 'test2@example.com', role: 'user' },
  ];
  getUsers(): Observable<{_id: string; username: string; email: string; role: string;}[]> {
    return of(this.mockUsers);
  }
}

describe('Component: Admin', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
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
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page header text', () => {
    const header = compiled.querySelector('.card-header');
    expect(header?.textContent).toContain('Registered users (2)');
  });

  it('should display the text for no users', () => {
    component.users = [];
    fixture.detectChanges();
    const header = compiled.querySelector('h4');
    expect(header?.textContent).toContain('Registered users (0)');
    const td = compiled.querySelector('td');
    expect(td?.textContent).toContain('There are no registered users');
  });

  it('should display registered users', () => {
    const tds = compiled.querySelectorAll('td');
    expect(tds[0].textContent).toContain('Test 1');
    expect(tds[1].textContent).toContain('test1@example.com');
    expect(tds[2].textContent).toContain('admin');
    expect(tds[4].textContent).toContain('Test 2');
    expect(tds[5].textContent).toContain('test2@example.com');
    expect(tds[6].textContent).toContain('user');
  });

  it('should display the delete buttons', () => {
    const buttons = compiled.querySelectorAll('button');
    expect(buttons[0].disabled).toBeTruthy();
    expect(buttons[0].textContent).toContain('Delete');
    expect(buttons[1].disabled).toBeFalsy();
    expect(buttons[1].textContent).toContain('Delete');
  });

});
