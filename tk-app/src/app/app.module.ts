import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EditInformationComponent } from './edit-information/edit-information.component';
import { ForgotPassword1Component } from './forgot-password1/forgot-password1.component';
import { ForgotPassword2Component } from './forgot-password2/forgot-password2.component';
import { ForgotPassword3Component } from './forgot-password3/forgot-password3.component'

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    LoginComponent,
    SignUpComponent,
    EditInformationComponent,
    ForgotPassword1Component,
    ForgotPassword2Component,
    ForgotPassword3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
