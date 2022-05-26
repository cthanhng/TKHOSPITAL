import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { MedicalRecord } from '../models/medical-record';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {

  baseUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  getByID(userID: string): Observable<MedicalRecord> {
    return this._http
      .get<MedicalRecord>(`${this.baseUrl}/medical-records/${userID}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }

}
