import { environment } from './../../../environments/environment';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-linkedin-login',
  templateUrl: './linkedin-login.component.html',
})
export class LinkedinLoginComponent implements OnInit {
  accessToken_uri = '/accessToken'; //'https://www.linkedin.com/oauth/v2/accessToken';
  data_uri = '/linkedinData'; //https://api.linkedin.com/v2/me
  constructor(
    private activeRouter: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRouter.queryParams
      .pipe(
        take(1),
        filter((params) => params.code),
        switchMap((param: any) => {
          const accessToken_body = `grant_type=authorization_code&client_id=${environment.linkedin_client_id}&client_secret=${environment.linkedin_client_secret}&redirect_uri=${environment.linkedin_redirect_uri}&code=${param.code}`;
          const httpOptions = {
            headers: new HttpHeaders().set(
              'Content-Type',
              'application/x-www-form-urlencoded'
            ),
          };
          return this.http.post(
            this.accessToken_uri,
            accessToken_body,
            httpOptions
          );
        }),
        filter((param: any) => param.access_token),
        switchMap((param: any) => {
          const httpOptions = {
            headers: new HttpHeaders().set(
              'Authorization',
              `Bearer ${param.access_token}`
            ),
          };
          return this.http.get(this.data_uri, httpOptions);
        })
      )
      .subscribe(
        (data: any) => {
          const obj = {
            nome: `${data?.localizedFirstName} ${data?.localizedLastName}`,
            foto: {
              value: data.profilePicture
                ? data?.profilePicture['displayImage~']?.elements[0]
                    ?.identifiers[0]?.identifier
                : undefined,
            },
          };
          const loginEvent = new CustomEvent<any>(environment.loginEventType, {
            detail: obj,
          });
          window.dispatchEvent(loginEvent);
          this.router.navigateByUrl('/#/cadastro');
        },
        (error) => console.log(error)
      );
  }
}
