import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginResponse, LoginService } from 'src/app/user-account-services/login-service.service';
import { CookieService } from 'ngx-cookie-service';
import { faCoffee, faLock } from '@fortawesome/free-solid-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedService } from 'src/app/services/shared-service.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent {
  faCoffee = faCoffee;
  faLock = faLock
  
  error: any | null = null;

  loginUser = {
    email: "",
    password: ""
  };

  logedinuser = {
  token: "",
  refreshToken:"",
  firstName:"",
  secondName:"",
  email:"",
  role:"",}

  @ViewChild('loginForm') loginForm!: NgForm;
  constructor(private loginService: LoginService, private router: Router,private sharedService: SharedService) { }


  

  onSubmit() {
      // Handle the case where the user is already logged in.
      if (this.loginForm.valid) {
      
        this.performLogin();

      }else {
        this.error = {};
        this.handleValidationError();
        console.log(this.loginForm.value)
      }
  
      this.error = {};
      this.error.loggedIn = 'You are already logged in.';
      
    
    
      
}

  performLogin() {
    this.loginService.loginUser('http://localhost:8080/api/v1/auth/signin', this.loginUser)
      .subscribe({
        next: response => this.handleSuccessfulLogin(response),
        error: errorResponse => {this.handleLoginError(errorResponse)},
        complete: () => console.log('Request completed')
      });
  }

  //front end valideerimine
  handleValidationError() {
    if(this.loginUser.email == ""){
    this.error.username = 'Email is recuired.';}
    if(this.loginUser.password == ""){
    this.error.password = 'Password is recuired.';}
    
  }
  handleSuccessfulLogin(response: LoginResponse) {
    this.error = null;
    console.log(response)
    this.logedinuser.refreshToken = response.refreshToken;
    this.logedinuser.firstName = response.firstName;
    this.logedinuser.secondName = response.secondName;
    this.logedinuser.email = response.email;
    this.logedinuser.role = response.role;
    this.sharedService.setLoggedInUser(this.logedinuser);
    
    
    console.log( )
    this.router.navigate(['/main']);
  }
  //Backend error
  handleLoginError(errorResponse: any) {
   
  
    if (errorResponse instanceof HttpErrorResponse) {
      if (errorResponse.status === 401) {
        if (errorResponse.error && errorResponse.error.message === 'Bad credentials') {
          this.error = 'Invalid username or password.';
          console.log('Invalid username or password.');
        } else {
          console.error('Unexpected error during login:', errorResponse);
          this.error = 'Something went wrong with signin. Please try again.';
        }
      } else {
        console.error('HTTP error during login:', errorResponse);
        this.error = `An error occurred during login (HTTP ${errorResponse.status}).`;
      }
    } else {
      console.error('Unexpected error type during login:', errorResponse);
      this.error = 'An unexpected error occurred during login.';
    }
  }
}