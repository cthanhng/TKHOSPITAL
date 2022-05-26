import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Payment } from '../models/payment_history';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

baseUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  getByID(userID: string): Observable<Payment> {
    return this._http
      .get<Payment>(`${this.baseUrl}/payments/${userID}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }
}
