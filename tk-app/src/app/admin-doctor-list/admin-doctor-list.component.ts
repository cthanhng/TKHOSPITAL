
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Doctor } from '../models/doctor-list';
import { DoctorListService } from '../services/doctor-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-doctor-list',
  templateUrl: './admin-doctor-list.component.html',
  styleUrls: ['./admin-doctor-list.component.css']
})
export class AdminDoctorListComponent implements OnInit {
 
  doctorList: any;
  errorMessage: string = '';
  doctor: Doctor = new Doctor();
  file:any
  Departments=["Dentistry","Pediatrics","Cardiology","Neurology"]
  Positions=["Vice Director","Director","Nursing","Intership"]
  public doctorForm = this._formBuilder.group({
    name: ['', [Validators.required]],
    department: ['', [Validators.required,]],
    position: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(10)]],
  })
  constructor(private _formBuilder: FormBuilder, private _service: DoctorListService,  private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.getDoctor()
  }
  getDoctor() {
    this._service.getDoctorList().subscribe(
      {
        next: data => this.doctorList = data,
        error: err => this.errorMessage = err,
      }
    )
  }
  onSelectFile(event:any){
 
    if (event.target.files.length > 0)
    {
      //console.log("File:", event.target.files[0])
      this.file=event.target.files[0];
      
    }
    else{
    }
  }


  onSubmit(data: any) {
   
    
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("department", data.department);
    formData.append("position", data.position);
    formData.append("description", data.description);
    formData.append("file", this.file);
    this._service.insertDoctor(formData).subscribe({
      next: res => {
        console.log("Success");
        this.getDoctor()
        this._toastr.warning("Doctor Inserted Successfully","Notice:",{timeOut:2000})
      },
      error: err => {
        console.log("Error", err.message)
      }
    })}
   

  
  
  onReset(form?:NgForm){
    if (form){
      form.reset();

    }
    this.doctor=new Doctor();
  }
  onDelete(id:string){
    if (confirm("Are you sure?")==true){
      this._service.deleteDoctor(id).subscribe(res => { 
        let resData=JSON.parse(JSON.stringify(res));
        if (resData.message==="success") {
          this._toastr.warning("Deleted Successfully","Notice:",{timeOut:2000})
          this.onReset();
          this.getDoctor();
         
        }
        else{
          alert(resData.message);
        }
      })
    }
  }
  get nameInput(){
    return this.doctorForm.controls["name"]
      }
  get departmentInput(){
    return this.doctorForm.controls["department"]
      }
  get positionInput(){
    return this.doctorForm.controls["position"]
      }
  get descriptionInput(){
    return this.doctorForm.controls["description"]
      }
}
