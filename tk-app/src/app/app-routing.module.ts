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

const routes: Routes = [
  {
    path: "service",component: ServicePageComponent
  }, 
  {
    path: "**",component: HomepageComponent
  }, 
  {
    path: "/basic-schedule",component: BasicComponent
  }, 
  {
    path: "/home-doctor",component: HomeDocComponent
  }, 
  {
    path: "/virtual-doctor",component: VirtualDocComponent
  }, 
  {
    path: "**",component: HomepageComponent
  }, 

  {
    path: "service/service-list",component: ServiceListComponent
  },
  {
    path: "service/after-hours",component: ServiceAfterHourComponent
  },
  {
    path: "service/service-list/:id",component: ServiceDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents=[ServiceListComponent,ServicePageComponent,ServiceAfterHourComponent,ServiceDetailComponent]