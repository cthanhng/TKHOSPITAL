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

<<<<<<< HEAD
  getByemail(email: string): Observable<UserAccount> {
    return this._http
      .get<UserAccount>(`${this.baseUrl}/user-account?email=${email}`)
=======
  getByUserAccount(userAccount: string): Observable<UserAccount> {
    return this._http
      .get<UserAccount>(`${this.baseUrl}/user-account?UserAccount=${userAccount}`)
>>>>>>> fd505ce7dd514a3e46eca4804b170b986bfbbf5b
      .pipe(retry(2), catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }

}
