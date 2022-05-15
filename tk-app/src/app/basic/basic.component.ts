import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  regForm: any;

  constructor(private _formBuilder: FormBuilder) { }

  /* public regForm = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    address: [''],
    phone: [''],
    date: [''],
  }) */

  ngOnInit(): void {
    this.regForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['',[Validators.required, Validators.minLength(10)]],
      phone: ['', [Validators.required, Validators.minLength(11)]],
      date: [''],
    })
  }
  get name(){
    return this.regForm.controls['name']
  }
  get address(){
    return this.regForm.controls['address']
  }
  get phone(){
    return this.regForm.controls['phone']
  }
}
