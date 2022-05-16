import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BasicScheduleService } from '../services/basic-schedule.service';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.css']
})
export class VipComponent implements OnInit {

  regForm: any;

  constructor(private _formBuilder: FormBuilder, private _service:BasicScheduleService) { }

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
