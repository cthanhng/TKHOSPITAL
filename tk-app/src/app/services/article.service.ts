import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Article } from '../models/article';

const baseUrl="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private _http:HttpClient ) { }
  getArticle(): Observable<Article[]>{

    return this._http.get<Article[]>(`${baseUrl}/articles`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  handleError(err: HttpErrorResponse) {
    return throwError(()=>new Error(err.message))
  }
}

