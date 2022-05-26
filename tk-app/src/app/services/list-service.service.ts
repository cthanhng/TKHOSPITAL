import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IService } from '../models/service';



const baseUrl = "http://localhost:3000/service"
@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private _http: HttpClient) { }
  getServiceList(): Observable<IService[]> {

    return this._http.get<IService[]>(`${baseUrl}/services`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message))
  }

  getServiceById(id:string): Observable<IService[]> {
    return this._http.get<IService[]>(`${baseUrl}/${id}`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  uploadData(data: any){
    return this._http.post(`${baseUrl}/upload`,data)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}
}
