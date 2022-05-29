import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { newSchedule } from '../models/Schedule-info';
import { VirtualScheduleService } from '../services/virtual-schedule.service';
// import { BasicScheduleService } from '../services/basic-schedule.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  // regForm: any;
  basic: any
  errMsg: any
  patient_schedule: any;
  basicSchedule: newSchedule = new newSchedule()
  constructor(private _formBuilder: FormBuilder, private _service: VirtualScheduleService) { }



  ngOnInit(): void {
    this.getSchedule()

    // this._service.getPatient_schedule().subscribe({
    //   next: data => this.patient_schedule = data,
    //   error: err => this.errorMessage = err,
    // })

  }

  getSchedule(){
    this._service.getAllSchedule().subscribe(
      {
        next: data => this.basic = data,
        error: err => this.errMsg = err
      })
  }

  public regForm = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    address: ['',[Validators.required, Validators.minLength(10)]],
    phone: ['', [Validators.required, Validators.minLength(11)]],
    date: ['' , [Validators.required]]
  })

  onSubmit(form: NgForm){
    this._service.uploadData(this.basicSchedule).subscribe({
      next: res => {
        console.log("Success!!!!!!!!")
        console.log(this.basicSchedule)
        this.getSchedule()
      },
      error: err => {
        console.log("Error: ", err.message)
      }
    })
  }


  get name(){
    return this.regForm.controls['name']
  }
  get address(){
    return this.regForm.controls['address']
  }
  get phone(){
    return this.regForm.controls['phone']
  }
  get date(){
    return this.regForm.controls['date']
  }

  // onSub
  


}
