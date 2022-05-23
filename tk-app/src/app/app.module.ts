import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminDoctorListComponent } from './admin-doctor-list/admin-doctor-list.component';
import { AdminArticleComponent } from './admin-article/admin-article.component';
import { AdminServiceComponent } from './admin-service/admin-service.component';
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
    ServiceAfterHourComponent,
    BasicComponent,
    VipComponent,
    LoginComponent,
    SignUpComponent,
    EditInformationComponent,
    ForgotPassword1Component,
    ForgotPassword2Component,
    ForgotPassword3Component,
    VirtualDocComponent,
    HomeDocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
