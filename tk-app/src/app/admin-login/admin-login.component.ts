import { AdminAccountService } from './../services/admin-account.service';
import { Component, OnInit } from '@angular/core';
import { AdminAccount } from '../models/admin_account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  adminAccount: AdminAccount = {
    userID: '',
    email: '',
    password: '',
  };

  constructor(private _adminAccountService: AdminAccountService,private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.adminAccount.email == '') {
      alert(',,,,');
      return;
    }
    if (this.adminAccount.password == '') {
      alert('The password is required');
      return;
    }

    this._adminAccountService.getByID(this.adminAccount.email).subscribe({
      next: (data) => {
        if (this.adminAccount.password != data.password) {
          alert('Password is not matched');
        } else {
          alert('Success login');
          location.href = 'http://localhost:4200/admin-service';
          localStorage.setItem(
            'client',
            JSON.stringify({
              email: this.adminAccount.email,
              type: 'admin',
            })
          );
        }
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }
  logOut(){
   localStorage.removeItem('client')
    this.router.navigate(['/'])
  }
}
