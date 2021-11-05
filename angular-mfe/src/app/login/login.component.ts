import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mountRootParcel } from 'single-spa';
import { Router } from '@angular/router';
import { config } from './react-input/reactWidget';
import { LoginService } from './login.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  onSelectChange = (value: string) => {
    this.dominio = value;
  };
  onChange = (value: string) => {
    this.loginForm.controls.email.setValue(value);
  };
  email = '';
  dominio = '@frwk.com.br';
  parcelProps = {
    type: 'text',
    placeholder: 'Email frameworker',
    name: 'emaila',
    onChange: this.onChange,
    onSelectChange: this.onSelectChange,
  };
  config = config;
  mountRootParcel = mountRootParcel;
  loginEventType = 'user-logged-in';
  loginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required),
  });

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      const values = {...this.loginForm.value}
      values.email = this.loginForm.value.email + this.dominio;
      this.loginService.login(values).subscribe((data: any) => {
        const loginEvent = new CustomEvent<any>(this.loginEventType, {
          detail: data.user,
        });
        window.dispatchEvent(loginEvent);
        this.router.navigateByUrl('/#/detalhe');
      });
    }
  }
}
