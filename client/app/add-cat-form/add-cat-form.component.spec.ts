import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';
import { CatService } from '../services/cat.service';
import { AddCatFormComponent } from './add-cat-form.component';

class CatServiceMock { }

describe('Component: AddCatForm', () => {
  let component: AddCatFormComponent;
  let fixture: ComponentFixture<AddCatFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ AddCatFormComponent ],
      providers: [
        ToastComponent, FormBuilder,
        { provide: CatService, useClass: CatServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display header text', () => {
    const el = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(el.textContent).toContain('Add new cat');
  });

  it('should display the add form', () => {
    const formEl = fixture.debugElement.query(By.css('form')).nativeElement;
    expect(formEl).toBeTruthy();
    const [inputName, inputAge, inputWeight] = fixture.debugElement.queryAll(By.css('input'));
    expect(inputName.nativeElement).toBeTruthy();
    expect(inputAge.nativeElement).toBeTruthy();
    expect(inputWeight.nativeElement).toBeTruthy();
    expect(inputName.nativeElement.value).toBeFalsy();
    expect(inputAge.nativeElement.value).toBeFalsy();
    expect(inputWeight.nativeElement.value).toBeFalsy();
    const btnAdd = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(btnAdd).toBeTruthy();
  });

});
