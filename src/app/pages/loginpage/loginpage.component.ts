import { Component } from '@angular/core';

import { PostService } from '../../services/post.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
 
})
export class LoginpageComponent {
  errors: any;
  
  loginUser = {
    username: "",
    password: ""
  };

  errorFieldMap: any = {
    'firstName': 'First Name',
    'username': 'Username',
    'userType': 'xx'

  };

  constructor(private postService: PostService, private router: Router) { }

  onSubmit() {
    console.log("see"+this.loginUser.password);
    this.postService.postserviceerrors = {};
    this.errors = {};
    
    this.postService.loginUser('http://localhost:8080/api/customers/login', this.loginUser)
    .subscribe({
      next: response => {
        console.log('User loged in:', response);
        // Reset errors when the request succeeds
        this.errors = {};
        this.router.navigate(['/main']);
      },
      error: errorResponse => {
        console.error('Registration error:', errorResponse);

        if (errorResponse.status === 400 && errorResponse.error && errorResponse.error.errors) {
          // Map API errors to form fields and display error messages
          const apiErrors = errorResponse.error.errors;
          this.errors = {};

          for (const key in apiErrors) {
            if (apiErrors.hasOwnProperty(key) && this.errorFieldMap[key]) {
              this.errors[this.errorFieldMap[key]] = apiErrors[key];
            }
          }
        } else {
          // Handle other error cases
          this.errors = { 'General Error': 'An error occurred.' };
        }
      },
      complete: () => console.log('Request completed')
      
    
    });
   

      
      
  }


}
