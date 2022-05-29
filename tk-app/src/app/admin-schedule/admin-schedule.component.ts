import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientScheduleService } from '../services/patient-schedule.service';

@Component({
  selector: 'app-admin-schedule',
  templateUrl: './admin-schedule.component.html',
  styleUrls: ['./admin-schedule.component.css']
})
export class AdminScheduleComponent implements OnInit {

  constructor( 
    private _services:PatientScheduleService,private router: Router ) { }
  
  patientSchedule: any;
  
  ngOnInit(): void {
    
    
    this._services.getScheduleList().subscribe({
      next: (data) =>{this.patientSchedule=data}})
    }
    
    logOut(){
      localStorage.removeItem('client')
       this.router.navigate(['/'])
     }
}
