import { Component, OnInit } from '@angular/core';
import { ArticleListService } from '../services/article-list.service';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.css']
})
export class AdminArticleComponent implements OnInit {

  articles: any;
  errorMessage: string ='';

  constructor(private _service: ArticleListService) { }

  ngOnInit(): void {
    this._service.getArticleList().subscribe(
      {
        next: data=>this.articles= data,
        error: err=> this.errorMessage = err,
     }
     )
  }
}
