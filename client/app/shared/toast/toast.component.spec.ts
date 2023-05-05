import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from './toast.component';

describe('Component: Toast', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have message set nor DOM element', () => {
    expect(component.message.body).toBeFalsy();
    expect(component.message.type).toBeFalsy();
    const div = compiled.querySelector('div');
    expect(div).toBeNull();
  });

  it('should set the message and create the DOM element', () => {
    const mockMessage = {
      body: 'test message',
      type: 'warning'
    };
    component.setMessage(mockMessage.body, mockMessage.type);
    expect(component.message.body).toBe(mockMessage.body);
    expect(component.message.type).toBe(mockMessage.type);
    fixture.detectChanges();
    const div = compiled.querySelector('div');
    expect(div).toBeDefined();
    expect(div?.textContent).toContain(mockMessage.body);
    expect(div?.className).toContain(mockMessage.type);
  });

});
