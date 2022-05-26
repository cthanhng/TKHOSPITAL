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
<<<<<<< HEAD
    userID: '',
    email: '',
    password: '',
=======
    UserID: '',
    UserAccount: '',
    Password: '',
>>>>>>> fd505ce7dd514a3e46eca4804b170b986bfbbf5b
    Type: '',
  };

  constructor(private _userAccountService: UserAccountService) {}

  ngOnInit(): void {}

  onSubmit() {
<<<<<<< HEAD
    if (this.userAccount.email == '') {
      alert(',,,,');
      return;
    }
    if (this.userAccount.password == '') {
=======
    if (this.userAccount.UserAccount == '') {
      alert(',,,,');
      return;
    }
    if (this.userAccount.Password == '') {
>>>>>>> fd505ce7dd514a3e46eca4804b170b986bfbbf5b
      alert('The password is required');
      return;
    }

<<<<<<< HEAD
    this._userAccountService.getByemail(this.userAccount.email).subscribe({
      next: (data) => {
        if (this.userAccount.password != data.password) {
=======
    this._userAccountService.getByUserAccount(this.userAccount.UserAccount).subscribe({
      next: (data) => {
        if (this.userAccount.Password != data.Password) {
>>>>>>> fd505ce7dd514a3e46eca4804b170b986bfbbf5b
          alert('Password is not matched');
        } else {
          alert('Success login');
          location.href = 'http://localhost:4200/homepage';
          localStorage.setItem(
            'client',
            JSON.stringify({
<<<<<<< HEAD
              UserAccount: this.userAccount.email,
=======
              UserAccount: this.userAccount.UserAccount,
>>>>>>> fd505ce7dd514a3e46eca4804b170b986bfbbf5b
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
