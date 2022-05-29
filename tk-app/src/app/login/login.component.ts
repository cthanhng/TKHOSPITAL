import { Component, OnInit } from '@angular/core';
import { IUserInfo } from '../models/user_infor';
import { UserInformationService } from '../services/user-information.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // userAccount: UserAccount = {
  //   userID: '',
  //   email: '',
  //   password: '',
  //   Type: '',
  // };
  user:IUserInfo={
    userID: '',
    City:'',
    DateOfBirth:'',
    Email:'',
    Gender:'',
    Height:'',
    IDNumber:'',
    HealthInsuranceCardNumber:'',
    Job:'',
    Nationality:'',
    Name:'',
    Phone:'',
    Religion:'',
    Street:'',
    Ward:'',
    Weight:'',
    image:'',
    password: ''
  }
  constructor(private _userService: UserInformationService ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.user.Email == '') {
      alert(',,,,');
      return;
    }
    if (this.user.password == '') {

      alert('The password is required');
      return;
    }

    this._userService.getByemail(this.user.Email).subscribe({
      next: (data) => {
        if (this.user.password != data.password) {
          alert('Password is not matched');
        } else {
          alert('Success login');
          this.user.userID=data.userID;
          location.href = 'http://localhost:4200/homepage';
          localStorage.setItem(
            'client',
            JSON.stringify({

              UserAccount: this.user.userID,
              type: 'user',
            })
          );
          localStorage.setItem("user", JSON.stringify(this.user));
          console.log(localStorage.getItem("user.userID"));
  
          console.log(this.user.userID)
  //  >this.updatedItem = i;
        }
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }

}
