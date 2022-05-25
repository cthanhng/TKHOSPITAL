import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { OurDoctor } from '../models/our-doctor';

const baseUrl="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class OurDoctorService {

  constructor(private _http:HttpClient ) { }
  getOurDoctor(): Observable<OurDoctor[]>{

    return this._http.get<OurDoctor[]>(`${baseUrl}/our-doctor`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  handleError(err: HttpErrorResponse) {
    return throwError(()=>new Error(err.message))
  }
}
