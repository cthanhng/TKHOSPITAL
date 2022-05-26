import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  regForm: any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this._formBuilder.group({
      cardnumber: ['', [Validators.required, Validators.minLength(3)]],
      cardexpiry: ['',[Validators.required, Validators.minLength(3)]],
      cardcvc: ['', [Validators.required, Validators.minLength(3)]],
      cardname: ['', [Validators.required, Validators.minLength(3)]],
    })
  }
  get cardnumber(){
    return this.regForm.controls['cardnumber']
  }
  get cardexpiry(){
    return this.regForm.controls['cardexpiry']
  }
  get cardcvc(){
    return this.regForm.controls['cardcvc']
  }
  get cardname(){
    return this.regForm.controls['cardname']
  }
}
