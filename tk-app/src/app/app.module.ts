import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceAfterHourComponent } from './service-after-hour/service-after-hour.component'
import { BasicComponent } from './basic/basic.component';
import { VipComponent } from './vip/vip.component'
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EditInformationComponent } from './edit-information/edit-information.component';
import { ForgotPassword1Component } from './forgot-password1/forgot-password1.component';
import { ForgotPassword2Component } from './forgot-password2/forgot-password2.component';
import { ForgotPassword3Component } from './forgot-password3/forgot-password3.component'
import { VirtualDocComponent } from './virtual-doc/virtual-doc.component';
import { HomeDocComponent } from './home-doc/home-doc.component'

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ServicePageComponent,
    ServiceListComponent,
    ServiceDetailComponent,
    ServiceAfterHourComponent
    BasicComponent,
    VipComponent
    LoginComponent,
    SignUpComponent,
    EditInformationComponent,
    ForgotPassword1Component,
    ForgotPassword2Component,
    ForgotPassword3Component
    VirtualDocComponent,
    HomeDocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
