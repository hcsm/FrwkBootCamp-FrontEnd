import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mountRootParcel } from 'single-spa';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginEventType = 'user-logged-in';
  parcelProps = {
    type: 'text',
    placeholder: 'Email frameworker',
    name: 'email',
  };
  loginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    token: new FormControl(undefined),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      delete this.loginForm.value.password;
      const loginEvent = new CustomEvent<any>(this.loginEventType, {
        detail: this.loginForm.value,
      });
      window.dispatchEvent(loginEvent);
      this.router.navigateByUrl('/#/detalhe');
    }
  }
}
