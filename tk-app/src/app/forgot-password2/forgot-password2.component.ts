import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../models/user-account';

@Component({
  selector: 'app-forgot-password2',
  templateUrl: './forgot-password2.component.html',
  styleUrls: ['./forgot-password2.component.css']
})
export class ForgotPassword2Component implements OnInit {

  s:string="1111"

  constructor() { }

  ngOnInit(): void {
  }
  check(value:any){
    if(this.s==value){
      alert("Success")
      location.href="http://localhost:4200/forgot-password3"
    }
    else{
      alert("Fail")
    }
  }

}
