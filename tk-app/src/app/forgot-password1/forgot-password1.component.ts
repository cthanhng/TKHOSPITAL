import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password1',
  templateUrl: './forgot-password1.component.html',
  styleUrls: ['./forgot-password1.component.css']
})
export class ForgotPassword1Component implements OnInit {

  public formReset= this._formBuilder.group({
    mail: ['',[Validators.email,Validators.required]]
  })

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  get mailInput(){
    return this.formReset.controls["mail"]
  }

}
