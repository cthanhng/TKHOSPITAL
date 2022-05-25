import { Component, OnInit } from '@angular/core';
import { OurDoctorService } from '../services/our-doctor.service';

@Component({
  selector: 'app-our-doctor',
  templateUrl: './our-doctor.component.html',
  styleUrls: ['./our-doctor.component.css']
})
export class OurDoctorComponent implements OnInit {

  ourdoctors: any;
  errorMessage: string ='';

  constructor(private _service: OurDoctorService) { }

  ngOnInit(): void {
    this._service.getOurDoctor().subscribe(
      {
        next: data=>this.ourdoctors= data,
        error: err=> this.errorMessage = err,
     }
     )
  }

}
