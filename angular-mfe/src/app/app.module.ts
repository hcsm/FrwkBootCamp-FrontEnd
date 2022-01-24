import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule
} from 'angularx-social-login';
import { ParcelModule } from 'single-spa-angular/parcel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkedinLoginComponent } from './login/linkedin-login/linkedin-login.component';
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LinkedinLoginComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ParcelModule,
    HttpClientModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '143947604415-hrk72ddtsvljok9njjjg07k2p7o2gugk.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('619295462760084'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
