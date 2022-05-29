// export class IScheduleInfo{

    
//     "BookingID":string;
//     "Doctor": string;
//     "Department": string;
//     "PatientName": string;
//     "BookingType": string;
//     "Confirmation": string;
//     "Phone": string;
//     "Email": string;
//     "District": string;
//     "Platform": string;
//     "Date": string;
//     "Time": string;
//     "ConnectingWay": string;
//     "TypeOfVisit": string;
// }
export class newSchedule{
    _id: any;
    type:any;
    connect: any;
    place: string;
    district: string;
    date: string;
   time: string;
   name: string;
   email: string;
   phone: string;
   doctor: string;
   address: string;
   dateOfBirth: string;
   constructor(){
       this._id="";
       this.type="";
       this.connect="";
       this.place="";
       this.district="";
       this.date="";
       this.time="";
       this.name="";
       this.email="";
       this.phone="";
       this.doctor="";
       this.address="";
       this.dateOfBirth="";
   }

}