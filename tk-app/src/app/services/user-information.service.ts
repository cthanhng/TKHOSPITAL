import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { EditUserInfo } from '../models/edit-user-info';
import { environment } from '../models/enviroment';
import { IUserInfo } from '../models/user_infor';
@Injectable({
  providedIn: 'root',
})
export class UserInformationService {
  baseUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  getByID(userID: string): Observable<IUserInfo> {
    return this._http
      .get<IUserInfo>(`${this.baseUrl}/user-informations/${userID}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  getByemail(email: string): Observable<IUserInfo> {
    return this._http
      .get<IUserInfo>(`${this.baseUrl}/user-informations?Email=${email}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }

  post(user:IUserInfo) {
   
    return this._http
      .post(`${this.baseUrl}/user-informations`, user)
      .pipe(retry(2), catchError(this.handleError));
  }
  update(id: string, newdata: EditUserInfo): Observable<any>{
    return this._http.patch(`${this.baseUrl}/${id}`, newdata)
  }
}
