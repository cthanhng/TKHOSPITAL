import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-virtual-doc',
  templateUrl: './virtual-doc.component.html',
  styleUrls: ['./virtual-doc.component.css']
})
export class VirtualDocComponent implements OnInit {

  public virtualForm = this._formbuilder.group({
    type: ['' , [Validators.required]],
    connect: ['' , [Validators.required]],
    place: ['' , [Validators.required]],
    district: ['' , [Validators.required]],
    date: ['' , [Validators.required]],
    time: ['' , [Validators.required]]
  })

  constructor(private _formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(data: any){
    const formData = new FormData() 
    formData.append("type" , data.type)
    // formData.append("file" , this.file)

    // console.log("FormData: ", formData)
    // for(let pair of formData.entries()){
    //   console.log(pair[0], pair[1]) //[0]:key [1]:value
    // }
  }

  get typeInput(){
    return this.virtualForm.controls["type"];
  }
  get connectInput(){
    return this.virtualForm.controls["connect"];
  }
  get placeInput(){
    return this.virtualForm.controls["place"];
  }
  get districtInput(){
    return this.virtualForm.controls["district"];
  }
  get dateInput(){
    return this.virtualForm.controls["date"];
  }
  get timeInput(){
    return this.virtualForm.controls["time"];
  }

}
