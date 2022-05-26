import { Component, OnInit } from '@angular/core';
import { PatientScheduleService } from '../services/patient-schedule.service';

@Component({
  selector: 'app-admin-schedule',
  templateUrl: './admin-schedule.component.html',
  styleUrls: ['./admin-schedule.component.css']
})
export class AdminScheduleComponent implements OnInit {

  constructor( 
    private _services:PatientScheduleService, ) { }
  
  patientSchedule: any;
  
  ngOnInit(): void {
    
    
    this._services.getScheduleList().subscribe({
      next: (data) =>{this.patientSchedule=data}})
    }
    
    
}
