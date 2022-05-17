import { Component, OnInit } from '@angular/core';
import { UserInformation } from '../models/user-information';
import { UserInformationService } from '../services/user-information.service';

@Component({
  selector: 'app-patient-portal',
  templateUrl: './patient-portal.component.html',
  styleUrls: ['./patient-portal.component.css']
})
export class PatientPortalComponent implements OnInit {

  constructor(private _service:UserInformationService) { }
  id:string="02";
userInfor?: UserInformation;
  ngOnInit(): void {
    this._service.getByID(this.id).subscribe({
      next: (data) =>{this.userInfor=data}})}

  }