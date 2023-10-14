import { GetService } from './services/get.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
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
import { PostService } from './services/post.service';
import { NotFoundComponentComponent } from './exception/not-found-component/not-found-component.component';



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
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    

  ],
  providers: [PostService, GetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
