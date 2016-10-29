/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

let fixture, comp;

describe('App: Angular 2 Full Stack', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

  it('should display the navigation bar links', () => {
    let de = fixture.debugElement.query(By.css('.nav'));
    let el = de.nativeElement;
    expect(el.children.length).toBe(3);
    expect(el.children[0].textContent).toContain('Angular 2 Full Stack');
    expect(el.children[1].textContent).toContain('Home');
    expect(el.children[2].textContent).toContain('About');
  });

});
