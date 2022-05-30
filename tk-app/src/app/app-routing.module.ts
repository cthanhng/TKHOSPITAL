
import { SignUpComponent } from './sign-up/sign-up.component';
import { PatientRecordComponent } from './patient-record/patient-record.component';
import { ServiceAfterHourComponent } from './service-after-hour/service-after-hour.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BasicComponent } from './basic/basic.component';
import { HomeDocComponent } from './home-doc/home-doc.component';
import { VirtualDocComponent } from './virtual-doc/virtual-doc.component';
import { LoginComponent } from './login/login.component';
import { EditInformationComponent } from './edit-information/edit-information.component';
import { PatientPortalComponent } from './patient-portal/patient-portal.component';
import { VipComponent } from './vip/vip.component';
import{HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminServiceComponent } from './admin-service/admin-service.component';
import { ForgotPassword1Component } from './forgot-password1/forgot-password1.component';
import { ForgotPassword2Component } from './forgot-password2/forgot-password2.component';
import { ForgotPassword3Component } from './forgot-password3/forgot-password3.component';
import { AdminScheduleComponent } from './admin-schedule/admin-schedule.component';
import { AdminDoctorListComponent } from './admin-doctor-list/admin-doctor-list.component';
import { AdminArticleComponent } from './admin-article/admin-article.component';
import { OurDoctorComponent } from './our-doctor/our-doctor.component';
import { ArticleComponent } from './article/article.component';
import { PackageServiceComponent } from './package-service/package-service.component';



const routes: Routes = [
  {
    path: "service",component: ServicePageComponent
  }, 
  {
    path: "header",component: HeaderComponent
  },
  {
    path:"footer",component: FooterComponent
  },
  {
    path: "homepage",component: HomepageComponent
  }, 
  {
    path: "",redirectTo:'homepage', pathMatch:'full'
  }, 

  {
    path: "basic-schedule",component: BasicComponent
  }, 
  {
    path: "basic-schedule/vip",component: VipComponent
  }, 
  {
    path: "home-doctor",component: HomeDocComponent
  }, 
  {
    path: "virtual-doctor",component: VirtualDocComponent
  },
  // {
  //   path: "virtual-doctor/confirm" , component: ScheduleVirtualConfirmComponent
  // },
  {
    path: "login",component: LoginComponent
  }, 
  {
    path: "signup",component: SignUpComponent
  }, 
  {
    path: "edit-information/:id",component: EditInformationComponent
  }, 
  {
    path: "patient-portal",component: PatientPortalComponent
  }, 
  {
    path: "patient-record",component: PatientRecordComponent
  }, 

  {
    path: "services/service-list",component: ServiceListComponent
  },
  {
    path: "service/after-hours",component: ServiceAfterHourComponent
  },
  {
    path:"admin-login",component: AdminLoginComponent
  },
  {
    path: "admin-doctor-list",component: AdminDoctorListComponent
  },
  {
    path: "admin-article",component: AdminArticleComponent
  },
  {
    path: "admin-service",component: AdminServiceComponent
  },
  {
    path: "admin-schedule",component: AdminScheduleComponent},
    {
      
    path: "our-doctor",component: OurDoctorComponent
  },{
    path:"forgot-password1", component:ForgotPassword1Component
  },
  {
    path:"forgot-password2", component:ForgotPassword2Component
  },
  {
    path:"forgot-password3", component:ForgotPassword3Component
  },
  {
    path:"article", component:ArticleComponent
  },
  {
    path:"service/package-service",component:PackageServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents=[ServiceListComponent,
  ServicePageComponent,
  ServiceAfterHourComponent,
  PatientRecordComponent,
  PatientPortalComponent, 
  EditInformationComponent, 
  SignUpComponent,
   LoginComponent,
   VirtualDocComponent
   ,HomeDocComponent,
   BasicComponent,
   VipComponent,
   AdminDoctorListComponent, 
   AdminArticleComponent, 
   AdminServiceComponent,
   LoginComponent,
  EditInformationComponent,
  ForgotPassword1Component,
  ForgotPassword2Component,
  ForgotPassword3Component,
  VirtualDocComponent,
  HomeDocComponent,
  AdminScheduleComponent,
  OurDoctorComponent,
  ArticleComponent,
  PackageServiceComponent
]

  

