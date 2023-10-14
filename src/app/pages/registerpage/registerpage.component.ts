import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent {
  
  

 
  errors: any;
  errorFieldMap: any = {
    'firstName': 'First Name',
    'lastName': 'Last Name',
    'email': 'Email',
    'username': 'Username',
    'password': 'Password'

  };

  user = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  };
 
  constructor(private postService: PostService, private router: Router) { }

  onSubmit() {

    
    this.postService.postserviceerrors = {};
    this.errors = {};
    this.postService.registerUser('http://localhost:8080/api/customers/create', this.user)
    .subscribe({
      next: response => {
        console.log('User registered:', response);
        // Reset errors when the request succeeds
        this.errors = {};
        this.router.navigate(['/login']); //Käivitatakse pärast edukat registreerimist
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
      complete: () => {console.log('Request completed');
      // this.router.navigate(['/login']); #Käivitatakse igal juhul pärast meetodi teostamist
    } 
    
    });
    

    }
   

      
      
  }




