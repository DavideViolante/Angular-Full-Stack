import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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
  getUsers(): Observable<object[]> {
    return of(this.mockUsers);
  }
}

describe('Component: Admin', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      providers: [
        ToastComponent,
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: UserService, useClass: UserServiceMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page header text', () => {
    const el = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(el.textContent).toContain('Registered users (2)');
  });

  it('should display the text for no users', () => {
    component.users = [];
    fixture.detectChanges();
    const headerEl = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(headerEl.textContent).toContain('Registered users (0)');
    const tdEl = fixture.debugElement.query(By.css('td')).nativeElement;
    expect(tdEl.textContent).toContain('There are no registered users');
  });

  it('should display registered users', () => {
    const tds = fixture.debugElement.queryAll(By.css('td'));
    expect(tds[0].nativeElement.textContent).toContain('Test 1');
    expect(tds[1].nativeElement.textContent).toContain('test1@example.com');
    expect(tds[2].nativeElement.textContent).toContain('admin');
    expect(tds[4].nativeElement.textContent).toContain('Test 2');
    expect(tds[5].nativeElement.textContent).toContain('test2@example.com');
    expect(tds[6].nativeElement.textContent).toContain('user');
  });

  it('should display the delete buttons', () => {
    const [btnDelete1, btnDelete2] = fixture.debugElement.queryAll(By.css('button'));
    expect(btnDelete1.nativeElement.disabled).toBeTruthy();
    expect(btnDelete1.nativeElement.textContent).toContain('Delete');
    expect(btnDelete2.nativeElement.disabled).toBeFalsy();
    expect(btnDelete2.nativeElement.textContent).toContain('Delete');
  });

});
