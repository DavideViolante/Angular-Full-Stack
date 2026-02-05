import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from './toast.component';

describe('Component: Toast', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have message set nor DOM element', () => {
    expect(component.displayedMessage().body).toBeFalsy();
    expect(component.displayedMessage().type).toBeFalsy();
    const div = compiled.querySelector('div');
    expect(div).toBeNull();
  });

  it('should set the message and create the DOM element', async () => {
    const mockMessage = {
      body: 'test message',
      type: 'warning'
    };
    component.setMessage(mockMessage.body, mockMessage.type);
    expect(component.displayedMessage().body).toBe(mockMessage.body);
    expect(component.displayedMessage().type).toBe(mockMessage.type);
    fixture.detectChanges();
    const div = compiled.querySelector('div');
    expect(div).toBeDefined();
    expect(div?.textContent).toContain(mockMessage.body);
    expect(div?.className).toContain(mockMessage.type);
  });

});
