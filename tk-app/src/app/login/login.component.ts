import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../models/user-account';
import { UserAccountService } from '../services/user-account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAccount: UserAccount = {
    userID: '',
    email: '',
    password: '',
    Type: '',
  };

  constructor(private _userAccountService: UserAccountService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.userAccount.email == '') {
      alert(',,,,');
      return;
    }
    if (this.userAccount.password == '') {

      alert('The password is required');
      return;
    }

    this._userAccountService.getByemail(this.userAccount.email).subscribe({
      next: (data) => {
        if (this.userAccount.password != data.password) {
          alert('Password is not matched');
        } else {
          alert('Success login');
          location.href = 'http://localhost:4200/homepage';
          localStorage.setItem(
            'client',
            JSON.stringify({

              UserAccount: this.userAccount.email,
              type: 'user',
            })
          );
        }
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }

}
