import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ListServiceService } from '../services/list-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-service',
  templateUrl: './admin-service.component.html',
  styleUrls: ['./admin-service.component.css']
})
export class AdminServiceComponent implements OnInit {
  public serviceForm = this._formBuilder.group({
    serviceName: ['', [Validators.required, Validators.minLength(3)]],
    price:[''],
    department:[''],
    description:[''],
    serviceImage:['']
  })
  file: any = null;

  constructor(private _service: ListServiceService, private _router: Router, private _formBuilder: FormBuilder,  private _toastr: ToastrService) { }
  serviceList: any
  errMsg: any
  selectedID: any

  ngOnInit(): void {
    this.getAllService();

   
  }
  onSelect(data: any) {
    this._router.navigate(['/services/service-list', data._id])
  }

  onSelectFile(event:any){
 
    if (event.target.files.length > 0)
    {
     
      this.file=event.target.files[0];
      
    }
    else{
    }
  }
  getAllService() {
    this._service.getServiceList().subscribe(
      {
        next: data => this.serviceList = data,
        error: err => this.errMsg = err,
      }
    )
  }
  onSubmit(data: any) {
    console.log("Name:", data.name);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("department", data.department);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("file", this.file)
    // console.log("formData",formData);
    // for (let pair of formData.entries()){
    //   console.log(pair[0], pair[1]);
    // }
    this._service.insertService(formData).subscribe({
      next: res => {
        console.log("Success");
        this._toastr.success("Service Inserted Successfully","Notice:",{timeOut:2000})
        this.getAllService();
      },
      error: err => {
        console.log("Error", err.message)
      }
    })

  }
  onReset(form?:NgForm){
    if (form){
      form.reset();
    }
  }
  onDelete(id:string){
    if (confirm("Are you sure?")==true){
      this._service.deleteService(id).subscribe(res => { 
        let resData=JSON.parse(JSON.stringify(res));
        if (resData.message==="success") {
          this._toastr.success("Deleted Successfully","Notice:",{timeOut:2000})
          this.onReset();
          this.getAllService()
         
        }
        else{
          alert(resData.message);
        }
      })
    }
  }
}
