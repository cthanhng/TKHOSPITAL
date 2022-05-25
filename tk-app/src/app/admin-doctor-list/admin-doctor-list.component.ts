import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorListService } from '../services/doctor-list.service';

@Component({
  selector: 'app-admin-doctor-list',
  templateUrl: './admin-doctor-list.component.html',
  styleUrls: ['./admin-doctor-list.component.css']
})
export class AdminDoctorListComponent implements OnInit {
  file: any=null;
  doctorLists: any;
  errorMessage: string ='';
  private _toastr: any;

  constructor(private _service: DoctorListService) { }

  ngOnInit(): void {
    this._service.getDoctorList().subscribe(
      {
        next: data=>this.doctorLists= data,
        error: err=> this.errorMessage = err,
     }
     )
  }
  getDoctor(){
    this._service.getDoctorList().subscribe(
      {
        next: data=>this.doctorLists= data,
        error: err=> this.errorMessage = err,
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
        this.getDoctor()
      },
      error: err=> {
        console.log("Error",err.message)
      }
  })
}}
