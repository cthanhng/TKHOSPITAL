import { Component, OnInit } from '@angular/core';
import { ArticleListService } from '../services/article-list.service';

import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.css']
})
export class AdminArticleComponent implements OnInit {

  articleList: any;
  errorMessage: string ='';
  file:any;
  nowDate:any
  public articleForm = this._formBuilder.group({
    
    title: ['',[Validators.required]],
    author: ['',[Validators.required]],
    content: ['',[Validators.required, Validators.minLength(10)]],
    imageName: ['',[Validators.required, Validators.maxLength(10)]],
  })
  constructor(private _service: ArticleListService,private _formBuilder: FormBuilder,private _toastr: ToastrService,private router: Router) { }

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
      this.nowDate= new Date()
      
    }
    else{
    }
  }
  onSubmit(data: any) {
   
    
    console.log("article:", data.name);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("author", data.author);
    formData.append("content", data.content);
    formData.append("imageName",data.imageName);
    formData.append("file", this.file);
    formData.append("updateAt",this.nowDate);
    console.log(formData);
    this._service.insertArticle(formData).subscribe({
      next: res => {
        console.log("Success");
        this. getArticleList()
        this._toastr.warning("Article Inserted Successfully","Notice:",{timeOut:2000})
      },
      error: err => {
        console.log("Error", err.message)
      }
    })}
   

  
  
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
  get titleInput(){
    return this.articleForm.controls["title"]
      }
  get authorInput(){
    return this.articleForm.controls["author"]
      }
  get contentInput(){
    return this.articleForm.controls["content"]
      }
  get imageNameInput(){
    return this.articleForm.controls["imageName"]
      }
      logOut(){
        localStorage.removeItem('client')
         this.router.navigate(['/'])
       }
}
