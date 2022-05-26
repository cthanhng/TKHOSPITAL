import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-doc',
  templateUrl: './home-doc.component.html',
  styleUrls: ['./home-doc.component.css']
})
export class HomeDocComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }
  public regForm = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    dob: ['',[Validators.required, Validators.minLength(10)]],
    email: ['',[Validators.required, Validators.minLength(10)]],
    address: ['',[Validators.required, Validators.minLength(10)]],
    phone: ['', [Validators.required, Validators.minLength(11)]],
    selectedDoctor: ['',[Validators.required, Validators.minLength(10)]],
    date: ['' , [Validators.required]],
    time: ['' , [Validators.required]]
  })

  get name(){
    return this.regForm.controls['name']
  }
  get dob(){
    return this.regForm.controls['dob']
  }
  get email(){
    return this.regForm.controls['email']
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
    formData.append("type:" , data.type)
    // formData.append("file" , this.file)

    // console.log("FormData: ", formData)
    // for(let pair of formData.entries()){
    //   console.log(pair[0], pair[1]) //[0]:key [1]:value
    // }
  }

}
