import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Patient_schedule } from '../models/patient_schedule';

@Injectable({
  providedIn: 'root'
})
export class BasicScheduleService {

  url: string = "http://localhost:3000/patient_schedule";

  constructor(private _http: HttpClient) { }

  getPatient_schedule(): Observable<Patient_schedule[]>{
    return this._http.get<Patient_schedule[]>(this.url).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse){
    return throwError(()=> new Error(err.message))
  }}
  
