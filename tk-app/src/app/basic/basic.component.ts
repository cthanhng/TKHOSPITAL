import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
// import { BasicScheduleService } from '../services/basic-schedule.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  regForm: any;
  patient_schedule: any;
  errorMessage: string ='';
  constructor(private _formBuilder: FormBuilder) { }

  /* public regForm = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    address: [''],
    phone: [''],
    date: [''],
  }) */

  ngOnInit(): void {
    this.regForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['',[Validators.required, Validators.minLength(10)]],
      phone: ['', [Validators.required, Validators.minLength(11)]],
      date: ['' , [Validators.required]]
    })

    // this._service.getPatient_schedule().subscribe({
    //   next: data => this.patient_schedule = data,
    //   error: err => this.errorMessage = err,
    // })

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

  onSubmit(data: any){
    const formData = new FormData() 
    formData.append("type" , data.type)
    // formData.append("file" , this.file)

    // console.log("FormData: ", formData)
    // for(let pair of formData.entries()){
    //   console.log(pair[0], pair[1]) //[0]:key [1]:value
    // }
  }
}
