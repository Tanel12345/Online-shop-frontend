import { NotFoundComponentComponent } from './exception/not-found-component/not-found-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';



const routes: Routes = [
  {path: 'main', component: MainpageComponent},
 
  {path: 'register', component: RegisterpageComponent},
  {path: 'login', component: LoginpageComponent},

  {path: '404', component: NotFoundComponentComponent},
  { path: '',   redirectTo: 'main', pathMatch: 'full' },
  

  {path: '**', redirectTo: '404'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
