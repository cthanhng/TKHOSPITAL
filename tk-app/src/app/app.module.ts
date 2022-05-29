import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UniqueFilterPipe } from './pipes/uniqueFilter.pipe';
import { AdminScheduleComponent } from './admin-schedule/admin-schedule.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PackageServiceComponent } from './package-service/package-service.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    
    FilterPipe,
    UniqueFilterPipe,
    AdminScheduleComponent,
    AdminLoginComponent,
    PackageServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      progressBar:true,
      progressAnimation:'decreasing',
      preventDuplicates:true
    })
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
