import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { UserAccount } from '../models/user-account';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  baseUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}
  getByemail(email: string): Observable<UserAccount> {
    return this._http
      .get<UserAccount>(`${this.baseUrl}/user-account?email=${email}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }

}
