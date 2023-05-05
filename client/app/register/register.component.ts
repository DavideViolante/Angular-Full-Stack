import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { UserService } from '../services/user.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  registerForm: UntypedFormGroup;
  username = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  email = new UntypedFormControl('', [
    Validators.email,
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  password = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  role = new UntypedFormControl('', [
    Validators.required
  ]);

  constructor(private formBuilder: UntypedFormBuilder,
              private router: Router,
              public toast: ToastComponent,
              private userService: UserService) {
    this.registerForm = this.formBuilder.group({
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role
    });
  }

  setClassUsername(): object {
    return { 'has-danger': !this.username.pristine && !this.username.valid };
  }

  setClassEmail(): object {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }

  setClassPassword(): object {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  register(): void {
    this.userService.register(this.registerForm.value).subscribe({
      next: () => {
        this.toast.setMessage('You successfully registered!', 'success');
        this.router.navigate(['/login']);
      },
      error: () => this.toast.setMessage('Email already exists', 'danger')
    });
  }
}
