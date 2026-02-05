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
    component.localCondition.set(true);
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const div = compiled.querySelector('div');
    expect(div).toBeDefined();
    expect(div?.textContent).toContain('Loading...');
  });

});
