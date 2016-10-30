/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

let fixture, comp;

describe('Component: App', () => {
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

  it('should display the navigation bar correctly', () => {
    let de = fixture.debugElement.queryAll(By.css('a'));
    expect(de.length).toBe(3);
    expect(de[0].nativeElement.textContent).toContain('Angular 2 Full Stack');
    expect(de[1].nativeElement.textContent).toContain('Home');
    expect(de[2].nativeElement.textContent).toContain('About');
    expect(de[0].attributes['routerLink']).toBe('/');
    expect(de[1].attributes['routerLink']).toBe('/');
    expect(de[2].attributes['routerLink']).toBe('/about');
  });

});
