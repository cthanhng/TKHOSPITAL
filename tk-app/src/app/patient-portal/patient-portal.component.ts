import { Component, OnInit } from '@angular/core';
import { PatientSchedule } from '../models/patient_schedule';
import {  Payment } from '../models/payment_history';
import{Events} from '../models/events'
import { IUserInfo } from '../models/user_infor';
// import { PatientSchedule } from '../models/patient-schedule';

import { EventService } from '../services/event.service';
import { PatientScheduleService } from '../services/patient-schedule.service';
import { PaymentsService } from '../services/payments.service';
import { UserInformationService } from '../services/user-information.service';


@Component({
  selector: 'app-patient-portal',
  templateUrl: './patient-portal.component.html',
  styleUrls: ['./patient-portal.component.css']
})
export class PatientPortalComponent implements OnInit {

  constructor(private _service:UserInformationService, 
    private _services:PatientScheduleService, private _services1: PaymentsService, 
    private _services2: EventService) { }
  id:string="02";
  userInfor: any;
  patientSchedule?: PatientSchedule;
  payments?: Payment;
  events: any;
  ngOnInit(): void {
    this._service.getByID(this.id).subscribe({
      next: (data) =>{this.userInfor=data}})
    
    this._services.getByID(this.id).subscribe({
      next: (data) =>{this.patientSchedule=data}})

  this._services1.getByID(this.id).subscribe({
      next: (data) =>{this.payments=data}})  

   this._services2.getEventList().subscribe({
      next: (data) =>{this.events=data}})  
    }
    

  }