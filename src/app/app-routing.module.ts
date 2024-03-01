import { NotFoundComponentComponent } from './exception/not-found-component/not-found-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { FormsModule } from '@angular/forms';
import { BasketComponent } from './pages/basket/basket.component';
import { AuthGuard } from './services/authGuard/auth.guard';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';



const routes: Routes = [
  {path: 'main', component: MainpageComponent},
 
  {path: 'register', component: RegisterpageComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'basket', component: BasketComponent, canActivate: [AuthGuard]}, // Use the AuthGuard to protect the route


  {path: '404', component: NotFoundComponentComponent},
  { path: '',   redirectTo: 'main', pathMatch: 'full' },
  {path: '**', redirectTo: '404'}
  

];

@NgModule({
  imports: [FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
