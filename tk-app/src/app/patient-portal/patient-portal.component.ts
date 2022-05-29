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
import { first } from 'rxjs';


@Component({
  selector: 'app-patient-portal',
  templateUrl: './patient-portal.component.html',
  styleUrls: ['./patient-portal.component.css']
})
export class PatientPortalComponent implements OnInit {

  constructor(private _service:UserInformationService, 
    private _services:PatientScheduleService, private _services1: PaymentsService, 
    private _services2: EventService) { }
  userInfo=window.localStorage.getItem('userInfo');
  userInfor: any;
  patientSchedule?: PatientSchedule;
  payments?: Payment;
  events: any;
  id: string="02"
  id_tam=window.localStorage.getItem('user')
  //  getUsers() {
  //   return Object.values(localStorage)
  //     .map(json => {
  //       try {
  //         return JSON.parse(json);
  //       }
  //       catch (e) {
  //         return undefined;
  //       }
  //     })
  //     .filter((user?: any): user is {userID: string} => user && typeof user.userID === 'string');
  // }
  //  userID = this.getUsers();

  ngOnInit(): void {
    this._service.getByID(this.id).subscribe({
      next: (data) =>{this.userInfor=data}})
    
    this._services.getByID(this.id).subscribe({
      next: (data) =>{this.patientSchedule=data}})

  this._services1.getByID(this.id).subscribe({
      next: (data) =>{this.payments=data}})  

   this._services2.getEventList().subscribe({
      next: (data) =>{this.events=data}})
  
      // this._service.getAll()
      //       .pipe(first())
      //       .subscribe(users => this.userInfor = users);
    }
    

  }