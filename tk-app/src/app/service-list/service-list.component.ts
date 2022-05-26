import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListServiceService } from '../services/list-service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  constructor(private _service:ListServiceService, private _router:Router, private _activatedRoute:ActivatedRoute) { }
  serviceList:any
  errMsg:any
  selectedID:any
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      (params)=> {
        let id = params.get("id");
        if (id!=null){
          this.selectedID=parseInt(id)
        }
      }
    )
    this._service.getServiceList().subscribe(
     {
       next: data=>this.serviceList= data,
       error: err=> this.errMsg=err,
    }
    )
  }
  onSelect(data: any){
    this._router.navigate(['/service/service-list',data.DepartId])
      }
}





