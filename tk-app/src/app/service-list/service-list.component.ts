import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListServiceService } from '../services/list-service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  filteredDepartment = 'All'
  public selectedIndex: number = 0;
  constructor(private _service:ListServiceService, private _router:Router, private _activatedRoute:ActivatedRoute) { }
  serviceList:any
  errMsg:any
  selectedID:any
  selectedItem:any
  ngOnInit(): void {
    this.getAllService();
    
    this._activatedRoute.paramMap.subscribe(
      (params)=> {
        let id = params.get("id");
        if (id!=null){
          this.selectedID=parseInt(id)
        }
      }
    )
   
   
    console.log(this.serviceList)
  }
  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  onSelect(data: any){
    this._router.navigate(['/services/service-list',data._id])
      }
  getAllService(){
      this._service.getServiceList().subscribe(
        {
          next: data=>this.serviceList= data,
          error: err=> this.errMsg=err,
       }
       )
    }
   
    selectImage(selectedItem:any) {
      this.selectedItem=selectedItem;
  }

  // onChangeDepartment(department: string) {
  //   this.filteredDepartment=department
 

  // }
}





