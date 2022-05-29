import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { identity } from 'lodash';
import { newSchedule } from '../models/Schedule-info';
import { VirtualScheduleService} from '../services/virtual-schedule.service';

@Component({
  selector: 'app-virtual-doc',
  templateUrl: './virtual-doc.component.html',
  styleUrls: ['./virtual-doc.component.css']
})
export class VirtualDocComponent implements OnInit {

  // virtualForm1 =[{
  //   id: 1,
  //   type: '12345',
  //   connect: "cc"
  // },{
  //   id: 2,
  //   type: '12345'
  // }]


  selectedID: any
  virtual: any
  errMsg: any
  virtualTemp: newSchedule = new newSchedule()
  type = ["Covid-19 Response" , "Adult General Medicine" , "Pediatrics General Medicine"]

  public virtualForm = this._formbuilder.group(
    {
      
      type: ['' , [Validators.required]],
      connect: ['' , [Validators.required]],
      place: ['' , [Validators.required]],
      district: ['' , [Validators.required]],
      date: ['' , [Validators.required]],
      time: ['' , [Validators.required]]
    }
  )

  constructor(private _formbuilder: FormBuilder, private _router: Router, private _service: VirtualScheduleService) { }

  ngOnInit(): void {
    this._service.getAllSchedule().subscribe(
      {
        next: data => this.virtual = data,
        error: err => this.errMsg = err
      })
  }
  getSchedule(){
    this._service.getAllSchedule().subscribe(
      {
        next: data => this.virtual = data,
        error: err => this.errMsg = err
      })
  }
    
    // console.log("Name: ", data)
    // const virtualForm = new FormData()
    
    // virtualForm.append("type" , data.type)
    // virtualForm.append("connect" , data.connect)
    // virtualForm.append("place" , data.place)
    // virtualForm.append("district" , data.district)
    // virtualForm.append("date" , data.date)
    // virtualForm.append("time" , data.time)
    // console.log("FormData: ", virtualForm)
    onSubmit(form: NgForm){
    this._service.uploadData(this.virtualTemp).subscribe({
      next: res => {
        console.log("Success!!!!!!!!")
        console.log(this.virtualTemp)
        this.getSchedule()
      },
      error: err => {
        console.log("Error: ", err.message)
      }
    })
  }
      // this._service.uploadData(this.virtualTemp).subscribe(res=> {
      //   let resData = JSON.parse(JSON.stringify(res))
      //   if(resData.message === "success"){
      //     if(res.message==="success"){
      //       console.log("Success123")
      //       this.getSchedule();
      //     }
      //     else{
      //       console.log("Loi r ne")
      //     } 
      //   } 
      //   }
      // )
  



  get typeInput(){
    return this.virtualForm.controls["type"];
  }
  get connectInput(){
    return this.virtualForm.controls["connect"];
  }
  get placeInput(){
    return this.virtualForm.controls["place"];
  }
  get districtInput(){
    return this.virtualForm.controls["district"];
  }
  get dateInput(){
    return this.virtualForm.controls["date"];
  }
  get timeInput(){
    return this.virtualForm.controls["time"];
  }

  // onSelect(data: any){
  //   this._router.navigate(['/virtual-doc/confirm', data.id])
  // }
  // isSelected(data: any){
  //   return data.id === this.selectedID
  // }


}
