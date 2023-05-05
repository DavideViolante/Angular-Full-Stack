import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';

describe('Component: Loading', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
    component.condition = true;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const div = compiled.querySelector('div');
    expect(div).toBeDefined();
    expect(div?.textContent).toContain('Loading...');
  });

});
