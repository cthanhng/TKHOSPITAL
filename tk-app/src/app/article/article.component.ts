import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: any;
  errorMessage: string ='';

  constructor(private _service: ArticleService) { }

  ngOnInit(): void {
    this._service.getArticle().subscribe(
      {
        next: data=>this.articles= data,
        error: err=> this.errorMessage = err,
     }
     )
  }

}
