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
    UserID: '',
    UserAccount: '',
    Password: '',
    Type: '',
  };

  constructor(private _userAccountService: UserAccountService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.userAccount.UserAccount == '') {
      alert(',,,,');
      return;
    }
    if (this.userAccount.Password == '') {
      alert('The password is required');
      return;
    }

    this._userAccountService.getByUserAccount(this.userAccount.UserAccount).subscribe({
      next: (data) => {
        if (this.userAccount.Password != data.Password) {
          alert('Password is not matched');
        } else {
          alert('Success login');
          location.href = 'http://localhost:4200/homepage';
          localStorage.setItem(
            'client',
            JSON.stringify({
              UserAccount: this.userAccount.UserAccount,
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
