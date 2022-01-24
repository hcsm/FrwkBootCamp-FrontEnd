import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
} from 'angularx-social-login';
import { mountRootParcel, ParcelConfig } from 'single-spa';
import { environment } from './../../environments/environment';
import { LoginService } from './login.service';
import { config } from '../../../../react-single/src/components/InputEmail';

declare var FB: any;
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
  config = config as ParcelConfig;
  mountRootParcel = mountRootParcel;
  loginForm = new FormGroup({
    email: new FormControl(undefined, Validators.required),
    senha: new FormControl(null, Validators.required),
  });

  constructor(
    private router: Router,
    private loginService: LoginService,
    private authService: SocialAuthService
  ) {}

  ngOnInit(): void {
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '619295462760084',
        cookie: true,
        xfbml: true,
        version: 'v12.0',
      });
      FB.AppEvents.logPageView();
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      (js as any).src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode ? fjs.parentNode.insertBefore(js, fjs) : undefined;
    })(document, 'script', 'facebook-jssdk');
  }

  googleHandler(): void {
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(this.socialHandler);
  }
  linkedInHandler() {
    const uri = `https://www.linkedin.com/oauth/v2/authorization?response_type=${environment.linkedin_response_type}&state=${environment.linkedin_state}&scope=${environment.linkedin_scope}&client_id=${environment.linkedin_client_id}&redirect_uri=${environment.linkedin_redirect_uri}`;
    window.open(uri);
  }
  facebookHandler() {
    this.authService
      .signIn(FacebookLoginProvider.PROVIDER_ID)
      .then(this.socialHandler);
  }
  socialHandler(data: any) {
    const obj = {
      inicioEmail: data.email.split('@')[0],
      nome: `${data.firstName} ${data.lastName}`,
      foto: { value: data.photoUrl },
      email: data.email,
    };
    const loginEvent = new CustomEvent<any>(environment.loginEventType, {
      detail: obj,
    });
    window.dispatchEvent(loginEvent);
    this.router.navigateByUrl('/#/cadastro');
  }
  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      const values = { ...this.loginForm.value };
      values.email = this.loginForm.value.email + this.dominio;
      this.loginService.login(values).subscribe(
        (data: any) => {
          const loginEvent = new CustomEvent<any>(environment.loginEventType, {
            detail: data.user,
          });
          window.dispatchEvent(loginEvent);
          this.router.navigateByUrl('/#/detalhe');
        },
        (error: any) => {
          this.loginForm.setErrors({ invalid: true });
        }
      );
    }
  }
}
