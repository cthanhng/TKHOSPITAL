import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListServiceService } from '../services/list-service.service';

@Component({
  selector: 'app-admin-service',
  templateUrl: './admin-service.component.html',
  styleUrls: ['./admin-service.component.css']
})
export class AdminServiceComponent implements OnInit {
  public testForm =this._formBuilder.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    file: ['']
})
file: any=null;

  constructor(private _service:ListServiceService, private _router:Router, private _activatedRoute:ActivatedRoute, private _formBuilder: FormBuilder) { }
  serviceList:any
  errMsg:any
  selectedID:any
 
  ngOnInit(): void {
    this.getAllService();
    
    this._activatedRoute.paramMap.subscribe(
      (params)=> {
        let id = params.get("id");
        if (id!=null){
          this.selectedID=parseInt(id)
        }
      }
    )
   
   
    console.log(this.serviceList)
  }
  onSelect(data: any){
    this._router.navigate(['/services/service-list',data._id])
      }
  getAllService(){
      this._service.getServiceList().subscribe(
        {
          next: data=>this.serviceList= data,
          error: err=> this.errMsg=err,
       }
       )
    }
    onSubmit(data:any){
      console.log("Name:", data.name);
      const formData= new FormData();
      formData.append("name", data.name);
      formData.append("file",this.file)
      // console.log("formData",formData);
      // for (let pair of formData.entries()){
      //   console.log(pair[0], pair[1]);
      // }
      this._service.uploadData(formData).subscribe({
        next: res=> {
          console.log("Success");
          this.getAllService()
        },
        error: err=> {
          console.log("Error",err.message)
        }
    })


}}
