import { Component, OnInit } from '@angular/core';
import { HealthDiagnose } from '../models/health-diagnose';
import { HealthDiagnoseService } from '../services/health-diagnose.service';
import { MedicalRecordService } from '../services/medical-record.service';

@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.css']
})
export class PatientRecordComponent implements OnInit {
  id:string="02";
  healthDiagnose: any;
  medicalRecords:any;
  yearSelected:any;
  temp:any;
  temp1:any
  
  constructor(private _service: HealthDiagnoseService, private _services:MedicalRecordService) { }

  ngOnInit(): void {
    this._service.getByID(this.id).subscribe({
      next: (data) =>{this.healthDiagnose=data}})  

    this._services.getByID(this.id).subscribe({
      next: (data) =>{this.medicalRecords=data}})  
     
      
  }
  // yearSelect(y:any):void{
  //  return  this.medicalRecords=y;
  // }
  yearSelect(y:any):void{
    this.temp = y.nam;
    console.log(this.temp)
    
  }
  selectDetail(n:any):void{
    this.temp1=n.nam;
    console.log(this.temp1)
  }
scrollToElement($element:any): void {
  console.log($element);
  $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
scrollToElement1($element1:any): void {
  console.log($element1);
  $element1.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
}
