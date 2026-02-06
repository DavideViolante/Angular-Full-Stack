import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('Component: About', () => {
  let fixture: ComponentFixture<AboutComponent>;
  let compiled: HTMLElement;
  
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    await fixture.whenStable();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the about component', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the header', () => {
    expect(compiled.querySelector('.card-header')?.textContent).toContain('About');
  });
});
