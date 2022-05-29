import { Component, OnInit } from '@angular/core';
import { ArticleListService } from '../services/article-list.service';

import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.css']
})
export class AdminArticleComponent implements OnInit {

  articleList: any;
  errorMessage: string ='';
  file:any
  public doctorForm = this._formBuilder.group({

  
  })
  constructor(private _service: ArticleListService,private _formBuilder: FormBuilder,private _toastr: ToastrService) { }

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
  onSelectFile(event:any){
 
    if (event.target.files.length > 0)
    {
      //console.log("File:", event.target.files[0])
      this.file=event.target.files[0];
      
    }
    else{
    }
  }
  onReset(form?:NgForm){
    if (form){
      form.reset();

    }
   
  }

  onDelete(id:string){
    if (confirm("Are you sure?")==true){
      this._service.deleteArticle(id).subscribe(res => { 
        let resData=JSON.parse(JSON.stringify(res));
        if (resData.message==="success") {
          this._toastr.success("Deleted Successfully","Notice:",{timeOut:2000})
          this.onReset();
          this.getArticleList();
         
        }
        else{
          alert(resData.message);
        }
      })
    }
  }
}
