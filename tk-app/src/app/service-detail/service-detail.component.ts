import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../services/list-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  constructor(private _service:ListServiceService,private _activatedRoute:ActivatedRoute, private _router:Router) { }
  selectedService:any
  service:any
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params)=> {
      let id = params.get('id');
      
      if (id !=null) {
        this.selectedService = id;
      }
    })
  }

}
