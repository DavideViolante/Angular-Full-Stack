import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { AuthService } from '../services/auth.service';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  let authService: AuthService;
  let authServiceStub: {
    loggedIn: boolean,
    logout: any
  };

  beforeEach(async(() => {
    authServiceStub = {
      loggedIn: true,
      logout: (function() {
        this.loggedIn = false;
      })
    };
    TestBed.configureTestingModule({
      declarations: [ LogoutComponent ],
      providers: [ { provide: AuthService, useValue: authServiceStub } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout the user', () => {
    authService.loggedIn = true;
    expect(authService.loggedIn).toBeTruthy();
    authService.logout();
    expect(authService.loggedIn).toBeFalsy();
  });
});
