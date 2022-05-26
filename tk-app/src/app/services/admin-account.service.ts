import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { AdminAccount } from '../models/admin_account';

@Injectable({
  providedIn: 'root'
})
export class AdminAccountService {

  baseUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  getByID(userID: string): Observable<AdminAccount> {
    return this._http
      .get<AdminAccount>(`${this.baseUrl}/admin-account?email=${userID}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }

}
