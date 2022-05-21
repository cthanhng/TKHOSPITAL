import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { DoctorList } from '../models/doctor-list';

const baseUrl="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class DoctorListService {

  constructor(private _http:HttpClient ) { }
  getDoctorList(): Observable<DoctorList[]>{

    return this._http.get<DoctorList[]>(`${baseUrl}/doctor-lists`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  handleError(err: HttpErrorResponse) {
    return throwError(()=>new Error(err.message))
  }
}
