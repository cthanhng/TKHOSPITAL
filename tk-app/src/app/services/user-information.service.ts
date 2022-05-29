import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
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
//   getAll() {
//     return this._http.get<IUserInfo>(`${environment.apiUrl}/users`);
// }

//   getById(id: string) {
//     return this._http.get<IUserInfo>(`${environment.apiUrl}/users/${id}`);
// }

  post(user: IUserInfo) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this._http
      .post(`${this.baseUrl}/user-informations/`, user, { headers: headers })
      .pipe(retry(2), catchError(this.handleError));
  }
}
