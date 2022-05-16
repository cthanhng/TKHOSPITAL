import { ServiceAfterHourComponent } from './service-after-hour/service-after-hour.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

const routes: Routes = [
  {
    path: "service",component: ServicePageComponent
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