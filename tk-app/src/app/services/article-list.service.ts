import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ArticleList } from '../models/article-list';


const baseUrl="http://localhost:3000/article"
@Injectable({
  providedIn: 'root'
})
export class ArticleListService {

  constructor(private _http:HttpClient ) { }
  getArticleList(): Observable<ArticleList[]>{

    return this._http.get<ArticleList[]>(`${baseUrl}/article-lists`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  handleError(err: HttpErrorResponse) {
    return throwError(()=>new Error(err.message))
  }
  insertArticle(data: any) {
    return this._http.post(`${baseUrl}/upload`,data)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
    }
   
    deleteArticle(id:string){
      return this._http.delete(`${baseUrl}/${id}`)
    }

}

