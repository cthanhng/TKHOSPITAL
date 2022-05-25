import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IService } from '../models/service';



const baseUrl="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private _http:HttpClient ) { }
  getServiceList(): Observable<IService[]>{

    return this._http.get<IService[]>(`${baseUrl}/ServiceList`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  handleError(err: HttpErrorResponse) {
    return throwError(()=>new Error(err.message))
  }
}
