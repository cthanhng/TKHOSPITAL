
import { SignUpComponent } from './sign-up/sign-up.component';
import { PatientRecordComponent } from './patient-record/patient-record.component';
import { ServiceAfterHourComponent } from './service-after-hour/service-after-hour.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
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
  {
    path: "login",component: LoginComponent
  }, 
  {
    path: "signup",component: SignUpComponent
  }, 
  {
    path: "edit-information",component: EditInformationComponent
  }, 
  {
    path: "patient-portal",component: PatientPortalComponent
  }, 
  {
    path: "patient-record",component: PatientRecordComponent
  }, 

  {
    path: "service/service-list",component: ServiceListComponent
  },
  {
    path: "service/after-hours",component: ServiceAfterHourComponent
  },
  {
    path: "service/service-list/:id",component: ServiceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents=[ServiceListComponent,ServicePageComponent,ServiceAfterHourComponent,ServiceDetailComponent,PatientRecordComponent,PatientPortalComponent, EditInformationComponent, SignUpComponent, LoginComponent,VirtualDocComponent,HomeDocComponent,BasicComponent,VipComponent, HeaderComponent, FooterComponent]