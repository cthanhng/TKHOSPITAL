import { Component, OnInit } from '@angular/core';
import { ArticleListService } from '../services/article-list.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articleList: any;
  errorMessage: string ='';

  constructor(private _service: ArticleListService) { }

  ngOnInit(): void {
    this.getArticleList()
  }
  getArticleList() {
    this._service.getArticleList().subscribe(
      {
        next: data => this.articleList = data,
        error: err => this.errorMessage = err,
      }
    )
  }

}
