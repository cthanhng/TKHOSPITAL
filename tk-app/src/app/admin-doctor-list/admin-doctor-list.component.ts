import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorListService } from '../services/doctor-list.service';

@Component({
  selector: 'app-admin-doctor-list',
  templateUrl: './admin-doctor-list.component.html',
  styleUrls: ['./admin-doctor-list.component.css']
})
export class AdminDoctorListComponent implements OnInit {

  doctorlists: any;
  errorMessage: string ='';
  private _toastr: any;

  constructor(private _service: DoctorListService) { }

  ngOnInit(): void {
    this._service.getDoctorList().subscribe(
      {
        next: data=>this.doctorlists= data,
        error: err=> this.errorMessage = err,
     }
     )
  }

}
