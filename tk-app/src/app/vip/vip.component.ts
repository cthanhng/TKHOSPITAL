import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.css']
})
export class VipComponent implements OnInit {

  regForm: any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['',[Validators.required, Validators.minLength(10)]],
      phone: ['', [Validators.required, Validators.minLength(11)]],
      selectedDoctor: ['', [Validators.required]],
      date: ['' , [Validators.required]],
      time: ['' , [Validators.required]],
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
  get selectedDoctor(){
    return this.regForm.controls['selectedDoctor']
  }
  get date(){
    return this.regForm.controls['date']
  }
  get time(){
    return this.regForm.controls['time']
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
