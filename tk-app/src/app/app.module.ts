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
import { ArticleComponent } from './article/article.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentOtpComponent } from './payment-otp/payment-otp.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    
    FilterPipe,
    UniqueFilterPipe,
    ArticleComponent,
    PaymentComponent,
    PaymentOtpComponent
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
