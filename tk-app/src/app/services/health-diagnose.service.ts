import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HealthDiagnose } from '../models/health-diagnose';

@Injectable({
  providedIn: 'root'
})
export class HealthDiagnoseService {

  baseUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  getByID(userID: string): Observable<HealthDiagnose> {
    return this._http
      .get<HealthDiagnose>(`${this.baseUrl}/health-diagnoses/${userID}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }

}
