import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { PatientSchedule } from '../models/patient_schedule';


@Injectable({
  providedIn: 'root'
})
export class PatientScheduleService {
  baseUrl = 'http://localhost:3000';
constructor(private _http: HttpClient) { }
getByID(userID: string): Observable<PatientSchedule> {
  return this._http
    .get<PatientSchedule>(`${this.baseUrl}/patient-schedule/${userID}`)
    .pipe(retry(2), catchError(this.handleError));
}
handleError(err: HttpErrorResponse) {
  return throwError(() => new Error(err.message));
}
getScheduleList(): Observable<PatientSchedule> {
  return this._http.get<PatientSchedule>(`${this.baseUrl}/patient-schedule`)
    .pipe(retry(2), catchError(this.handleError1));
}
handleError1(err: HttpErrorResponse) {
  return throwError(() => new Error(err.message));
}
}
