import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';

describe('Component: Toast', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;
  let compiled: HTMLElement;
  let toastService: ToastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastComponent],
      providers: [ToastService]
    }).compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    toastService = TestBed.inject(ToastService);
    fixture.detectChanges();
    await fixture.whenStable();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have message set nor DOM element', () => {
    expect(toastService.message()).toBeNull();
    const div = compiled.querySelector('div');
    expect(div).toBeNull();
  });

  it('should set the message and create the DOM element', () => {
    const mockMessage = {
      body: 'test message',
      type: 'warning'
    };
    toastService.setMessage(mockMessage.body, mockMessage.type);
    fixture.detectChanges();
    expect(toastService.message()?.body).toBe(mockMessage.body);
    expect(toastService.message()?.type).toBe(mockMessage.type);
    const div = compiled.querySelector('div');
    expect(div).toBeDefined();
    expect(div?.textContent).toContain(mockMessage.body);
    expect(div?.className).toContain(mockMessage.type);
  });

});
