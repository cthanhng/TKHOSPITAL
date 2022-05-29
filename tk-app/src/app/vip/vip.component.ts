import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { newSchedule } from '../models/Schedule-info';
import { VirtualScheduleService } from '../services/virtual-schedule.service';


@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.css']
})
export class VipComponent implements OnInit {

  // regForm: any;
  vip: any;
  errMsg: any
  vipSchedule: newSchedule = new newSchedule()

  constructor(private _formBuilder: FormBuilder, private _service: VirtualScheduleService) { }

  ngOnInit(): void {
    this.getSchedule()
    
  }

  public regForm = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    address: ['',[Validators.required, Validators.minLength(10)]],
    phone: ['', [Validators.required, Validators.minLength(11)]],
    selectedDoctor: ['', [Validators.required]],
    date: ['' , [Validators.required]],
    time: ['' , [Validators.required]],
  })

  get name(){
    return this.regForm.controls['name']
  }
  get address(){
    return this.regForm.controls['address']
  }
  get phone(){
    return this.regForm.controls['phone']
  }
  get selectedDoctor(){
    return this.regForm.controls['selectedDoctor']
  }
  get date(){
    return this.regForm.controls['date']
  }
  get time(){
    return this.regForm.controls['time']
  }

  getSchedule(){
    this._service.getAllSchedule().subscribe(
      {
        next: data => this.vip = data,
        error: err => this.errMsg = err
      })
  }

  onSubmit(form: NgForm){
    this._service.uploadData(this.vipSchedule).subscribe({
      next: res => {
        console.log("Success!!!!!!!!")
        console.log(this.vipSchedule)
        this.getSchedule()
      },
      error: err => {
        console.log("Error: ", err.message)
      }
    })
  }
  // onSubmit(data: any){
  //   const formData = new FormData() 
  //   formData.append("name" , data.name)
  //   formData.append("address" , data.address)
  //   formData.append("phone" , data.phone)
  //   formData.append("selectedDoctor" , data.selectedDoctor)
  //   formData.append("date" , data.data)
  //   formData.append("time" , data.time)

  //   console.log("FormData: ", formData)
    
  //   this._service.uploadData(formData).subscribe({
  //     next: res => {
  //       console.log("Success!!!!!!!!")
  //       this.getSchedule()
  //     },
  //     error: err => {
  //       console.log("Error: ", err.message)
  //     }
      
  //   })
  // }
    // formData.append("file" , this.file)

    // console.log("FormData: ", formData)
    // for(let pair of formData.entries()){
    //   console.log(pair[0], pair[1]) //[0]:key [1]:value
    // }
  

}
