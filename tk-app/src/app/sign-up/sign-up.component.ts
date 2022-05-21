import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { userInformation } from '../models/user-information';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  u=new userInformation()
  errFlag=false

  constructor() { }

  ngOnInit(): void {
  }
  checkPhone(value:any):void{
    let s:any;
   s = value.split("")

    if(s.length()===10){
       this.errFlag =false
    }else{
     this.errFlag=true
    }
  }

}
