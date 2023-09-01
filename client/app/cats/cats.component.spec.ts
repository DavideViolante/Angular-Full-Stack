import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { waitForAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, UntypedFormBuilder, ReactiveFormsModule } from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';
import { CatService } from '../services/cat.service';
import { CatsComponent } from './cats.component';
import { of, Observable } from 'rxjs';

class CatServiceMock {
  mockCats = [
    { name: 'Cat 1', age: 1, weight: 2 },
    { name: 'Cat 2', age: 3, weight: 4.2 },
  ];
  getCats(): Observable<{name: string; age: number; weight: number}[]> {
    return of(this.mockCats);
  }
}

describe('Component: Cats', () => {
  let component: CatsComponent;
  let fixture: ComponentFixture<CatsComponent>;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule, ReactiveFormsModule ],
      declarations: [ CatsComponent ],
      providers: [
        ToastComponent, UntypedFormBuilder,
        { provide: CatService, useClass: CatServiceMock }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page header text', () => {
    const header = compiled.querySelector('.card-header');
    expect(header?.textContent).toContain('Current cats (2)');
  });

  it('should display the text for no cats', () => {
    component.cats = [];
    fixture.detectChanges();
    const header = compiled.querySelector('.card-header');
    expect(header?.textContent).toContain('Current cats (0)');
    const td = compiled.querySelector('td');
    expect(td?.textContent).toContain('There are no cats in the DB. Add a new cat below.');
  });

  it('should display current cats', () => {
    const tds = compiled.querySelectorAll('td');
    expect(tds.length).toBe(8);
    expect(tds[0].textContent).toContain('Cat 1');
    expect(tds[1].textContent).toContain('1');
    expect(tds[2].textContent).toContain('2');
    expect(tds[4].textContent).toContain('Cat 2');
    expect(tds[5].textContent).toContain('3');
    expect(tds[6].textContent).toContain('4.2');
  });

  it('should display the edit and delete buttons', () => {
    const buttons = compiled.querySelectorAll('button');
    expect(buttons[0].textContent).toContain('Edit');
    expect(buttons[1].textContent).toContain('Delete');
    expect(buttons[2].textContent).toContain('Edit');
    expect(buttons[3].textContent).toContain('Delete');
  });

  it('should display the edit form', async () => {
    component.isEditing = true;
    component.cat = { name: 'Cat 1', age: 1, weight: 2 };
    fixture.detectChanges();
    await fixture.whenStable();
    const tds = compiled.querySelectorAll('td');
    expect(tds.length).toBe(1);
    const form = compiled.querySelector('form');
    expect(form).toBeTruthy();
    const inputs = compiled.querySelectorAll('input');
    expect(inputs[0].value).toContain('Cat 1');
    expect(inputs[1].value).toContain('1');
    expect(inputs[2].value).toContain('2');
    const buttons = compiled.querySelectorAll('button');
    expect(buttons[0].textContent).toContain('Save');
    expect(buttons[1].textContent).toContain('Cancel');
  });

});
