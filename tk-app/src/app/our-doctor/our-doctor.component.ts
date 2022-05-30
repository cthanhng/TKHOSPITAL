import { Component, OnInit } from '@angular/core';
import { DoctorListService } from '../services/doctor-list.service';
import { OurDoctorService } from '../services/our-doctor.service';

@Component({
  selector: 'app-our-doctor',
  templateUrl: './our-doctor.component.html',
  styleUrls: ['./our-doctor.component.css']
})
export class OurDoctorComponent implements OnInit {

  ourdoctors: any;
  errorMessage: string ='';

  constructor( private _service:DoctorListService) { }

  ngOnInit(): void {
    this._service.getDoctorList().subscribe(
      {
        next: data=>this.ourdoctors= data,
        error: err=> this.errorMessage = err,
     }
     )
  }

}
