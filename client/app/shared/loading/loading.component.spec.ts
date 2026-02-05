import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';

describe('Component: Loading', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let compiled: HTMLElement;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [LoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show the DOM element', () => {
    const div = compiled.querySelector('div');
    expect(div).toBeNull();
  });

  it('should show the DOM element', () => {
    fixture.componentRef.setInput('condition', true);
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const header = compiled.querySelector('h4');
    expect(header?.textContent).toContain('Loading...');
  });

});
