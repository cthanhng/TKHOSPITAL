import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { newSchedule } from '../models/Schedule-info';



@Injectable({
  providedIn: 'root'
})
export class VirtualScheduleService {

  readonly baseUrl = 'http://localhost:3000/booking-schedules';

  constructor(private _http: HttpClient) {}

  getByID(BookingID: any): Observable<newSchedule> {
    return this._http
      .get<newSchedule>(`${this.baseUrl}/schedule-info/${BookingID}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }

  uploadData(data: newSchedule): Observable<any> {
    // , { headers: headers }
    return this._http
      .post(`${this.baseUrl}/upload`,data)
      .pipe(retry(2), catchError(this.handleError));
  }
  getAllSchedule(){
    return this._http.get<newSchedule>(`${this.baseUrl}/patient_schedules`).pipe(
      retry(5),
      catchError(this.handleError)
    )
  }

}
