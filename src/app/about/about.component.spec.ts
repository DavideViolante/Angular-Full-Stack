/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AboutComponent } from './about.component';

let fixture, comp;

describe('Component: About', () => {
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AboutComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create an instance', () => {
    let component = new AboutComponent();
    expect(component).toBeTruthy();
  });

  it('should display the string "About" in h4', () => {
    let de = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(de.textContent).toContain('About');
  });

});
