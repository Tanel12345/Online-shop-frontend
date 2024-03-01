
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';

import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NotFoundComponentComponent } from './exception/not-found-component/not-found-component.component';
import { BasketComponent } from './pages/basket/basket.component';
import { AppComponent } from './app/app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';




@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginpageComponent,
    RegisterpageComponent,
 
    CarouselComponent,
    ProductsComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponentComponent,
    BasketComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
