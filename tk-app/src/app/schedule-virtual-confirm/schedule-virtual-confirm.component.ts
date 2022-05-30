import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-schedule-virtual-confirm',
  templateUrl: './schedule-virtual-confirm.component.html',
  styleUrls: ['./schedule-virtual-confirm.component.css']
})
export class ScheduleVirtualConfirmComponent implements OnInit {

  selectedID: any

  constructor(private _router: Router , private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      let id = params.get("id");
      if (id != null){
        this.selectedID = id
      }
    })


    this._activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('id'); //ID trong app-routing
      if(id != null){
        this.selectedID = parseInt(id)
      }
    })
  }

  goBack(){
    this._router.navigate(['/Patient_schedules', {id: this.selectedID}])
  }




}
