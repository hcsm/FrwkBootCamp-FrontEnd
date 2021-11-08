import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // readonly AUTHAPI = '/api/framebook/auth';
  readonly AUTHAPI = 'http://localhost:8004/framebook/auth';

  constructor(private http: HttpClient) {}

  login(body: object) {
    return this.http
      .post(this.AUTHAPI, body)
      .pipe(
        filter((data: any) => data && 'user' in data),
        take(1)
      );
  }
}
