import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-otp',
  templateUrl: './payment-otp.component.html',
  styleUrls: ['./payment-otp.component.css']
})
export class PaymentOtpComponent implements OnInit {

  regForm: any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this._formBuilder.group({
      otp: ['', [Validators.required]],
    })
  }
  get otp(){
    return this.regForm.controls['otp']
  }
}
