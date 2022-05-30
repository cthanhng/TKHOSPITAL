import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUserInfo } from '../models/user_infor';
import { UserInformationService } from '../services/user-information.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  user:IUserInfo={
    "userID": '',
    "City":'',
    "DateOfBirth":'',
    "Email":'',
    "Gender":'female',
    "Height":'',
    "IDNumber":'',
    "HealthInsuranceCardNumber":'',
    "Job":'',
    "Nationality":'',
    "Name":'',
    "Phone":'',
    "Religion":'',
    "Street":'',
    "Ward":'',
    "Weight":'',
    'image':'',
    "password":'',
  }
  Nationality=["Vietnam","China","Korea","Japan","India"]
  City=["Hà Tĩnh","Hà Nội","HCM","Đà Lạt"]
  Ward=["Phuong A","Phuong B","Phuong C"]
  errFlag = false;

  constructor(private _userService: UserInformationService) {}

  ngOnInit(): void {}
  check(value: any): void {
    if(value==='none'){
      this.errFlag=true
    }
    else{
      this.errFlag=false
    }
  }

  async onSubmit() {
    await this._userService.post(this.user).subscribe();
    alert('Success');
  }
}
