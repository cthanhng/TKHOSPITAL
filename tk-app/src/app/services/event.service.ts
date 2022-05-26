import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Events } from '../models/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

baseUrl = 'http://localhost:3000';
constructor(private _http: HttpClient) { }
  getEventList(): Observable<Events> {
    return this._http.get<Events>(`${this.baseUrl}/events`)
      .pipe(retry(2), catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }

}
