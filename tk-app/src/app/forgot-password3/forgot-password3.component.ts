import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { checkPass } from '../check.validator';

@Component({
  selector: 'app-forgot-password3',
  templateUrl: './forgot-password3.component.html',
  styleUrls: ['./forgot-password3.component.css']
})
export class ForgotPassword3Component implements OnInit {

  public regForm = this._formBuilder.group({
    password:[''],
    confirmPass:['']
  },{Validators:[checkPass]})

  constructor( private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

}
