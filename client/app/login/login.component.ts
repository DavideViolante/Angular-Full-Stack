import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AuthService } from '@services';
import { ToastComponent } from '@shared/components/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = new FormControl('', [
    Validators.email,
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    public toast: ToastComponent
  ) {}

  ngOnInit(): void {
    if (this.auth.loggedIn) {
      this.router.navigate(['/']);
    }
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });
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
