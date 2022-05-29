export interface DoctorList { 
    "Image":string;
    "DoctorID":string;
    "DoctorName": string;
    "Department": string;
    "Position": string;
    "Description": string;
}
export class Doctor{
    _id:any;
   
    DoctorName:string;
    Department:string;
    Description:string;
    Position:string
    constructor(){
        this._id="";
        this.DoctorName="";
        this.Description="";
        this.Department="";
        this.Position= ""  ;
    }
}