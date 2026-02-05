import { TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('Component: About', () => {
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    }).compileComponents();
  });

  it('should create the about component', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the header', async () => {
    const fixture = TestBed.createComponent(AboutComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-header')?.textContent).toContain('About');
  });
});
