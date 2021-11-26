import { LoginComponent } from './login/login.component';
import { LinkedinLoginComponent } from './login/linkedin-login/linkedin-login.component';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '**', component: EmptyRouteComponent },
  { path: 'login', component: LoginComponent},
  { path: 'linkedinLoginResponse', component: LinkedinLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
