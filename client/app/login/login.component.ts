import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false
})
export class LoginComponent implements OnInit {
  private auth = inject(AuthService);
  private formBuilder = inject(UntypedFormBuilder);
  private router = inject(Router);
  toast = inject(ToastComponent);


  loginForm: UntypedFormGroup;
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

  constructor() {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit(): void {
    if (this.auth.loggedIn) {
      this.router.navigate(['/']);
    }
  }

  setClassEmail(): object {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }

  setClassPassword(): object {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  login(): void {
    this.auth.login(this.loginForm.value);
  }

}
