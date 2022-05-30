import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserInfo } from '../models/user_infor';
import { UserInformationService } from '../services/user-information.service';
import {EditUserInfo} from '../models/edit-user-info'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.css']
})
export class EditInformationComponent implements OnInit {

  selectID:string="01"
  user: any
  errMsg:any
  Nationality=["Vietnam","China","Korea","Japan","India"]
  City=["Hà Tĩnh","Hà Nội","HCM","Đà Lạt"]
  Ward=["Phuong A","Phuong B","Phuong C"]

  s: EditUserInfo = new EditUserInfo()

  constructor(private _userService:UserInformationService, private _router:Router, private _activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    // this._activatedRouter.paramMap.subscribe((params)=>{
    //   let id = params.get('id')
    //   if(id !=null){
    //     this.selectID=parseInt(id)
    //   }
    // })
    this._userService.getByID(this.selectID).subscribe({
      next: data => this.user =data,
      error: err => this.errMsg=err
    })
  }
  onSubmit(form: NgForm){
    this._userService.update(this.selectID, this.s).subscribe(res =>{
      let resData = JSON.parse(JSON.stringify(res));
      if(resData.message ==="success"){
        alert("update success")
      }
  })
}

}
