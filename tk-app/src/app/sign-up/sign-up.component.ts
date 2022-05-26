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
    City:'abcxd',
    DateOfBirth:"25/12/2001",
    Email:'thunt19406@st.uel.edu.vn',
    Gender:'female',
    Height:'543',
    IDNumber:'123',
    HealthInsuranceCardNumber:'4566',
    Job:'student',
    Nationality:'VN',
    Name:'NTT',
    Phone:'4564565',
    Religion:'none',
    Street:'345365',
    Ward:'dfgfh',
    Weight:'100',
    image:'dgfgtrrtgrh'
  }
  errFlag = false;

  constructor(private _userService: UserInformationService) {}

  ngOnInit(): void {}
  checkPhone(value: any): void {
    // let s: any;
    // s = value.split('');

    // if (s.length() === 10) {
    //   this.errFlag = false;
    // } else {
    //   this.errFlag = true;
    // }
  }

  async onSubmit() {
    await this._userService.post(this.user).subscribe();
    alert('Success');
  }
}
