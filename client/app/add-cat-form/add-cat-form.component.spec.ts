import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';
import { CatService } from '../services/cat.service';
import { AddCatFormComponent } from './add-cat-form.component';

class CatServiceMock { }

describe('Component: AddCatForm', () => {
  let component: AddCatFormComponent;
  let fixture: ComponentFixture<AddCatFormComponent>;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ AddCatFormComponent ],
      providers: [
        ToastComponent, UntypedFormBuilder,
        { provide: CatService, useClass: CatServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display header text', () => {
    const header = compiled.querySelector('.card-header');
    expect(header?.textContent).toContain('Add new cat');
  });

  it('should display the add form', () => {
    const form = compiled.querySelector('form');
    expect(form).toBeTruthy();
    const inputs = compiled.querySelectorAll('input');
    expect(inputs[0]).toBeTruthy();
    expect(inputs[1]).toBeTruthy();
    expect(inputs[2]).toBeTruthy();
    expect(inputs[0].value).toBeFalsy();
    expect(inputs[1].value).toBeFalsy();
    expect(inputs[2].value).toBeFalsy();
    const button = compiled.querySelector('button');
    expect(button).toBeTruthy();
  });

});
