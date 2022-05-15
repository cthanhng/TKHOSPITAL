import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IPatient_schedule } from './interfaces/Patient_schedule';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  url: string = "http://localhost:3000/patient_schedule";

  constructor(private _http: HttpClient) { }

  getPatient_schedule(): Observable<IPatient_schedule[]>{
    return this._http.get<IPatient_schedule[]>(this.url).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse){
    return throwError(()=> new Error(err.message))
  }
}
