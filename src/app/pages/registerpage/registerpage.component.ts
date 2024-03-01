import { Component } from '@angular/core';
import { RegisterService } from 'src/app/user-account-services/register-service.service'; // Uuendatud tee
import { Router } from '@angular/router';
@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent {
   // User object that holds the registration data
  user: {
    firstName?: string,
    lastName?: string,
    username?: string,
    email?: string,
    password?: string,
    [key: string]: string | undefined;
  } = {};
  // Object to store error messages from the backend or frontend validations
  errors: { [key: string]: string } = {};
  formFields = [
    {name: 'firstName', label: 'First Name', type: 'text', placeholder: 'Your firstname', required: true},
    {name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Your lastname', required: true},
    {name: 'username', label: 'Username', type: 'text', placeholder: 'Your username', required: true},
    {name: 'email', label: 'Email', type: 'email', placeholder: 'Your email', required: true},
    {name: 'password', label: 'Password', type: 'password', placeholder: 'Your password', required: true},
  ];
  // Injecting necessary services for registration and routing
  constructor(private registerService: RegisterService, private router: Router) { }
  // Function called when the registration form is submitted
  onSubmit(f: any) {
    if(f.valid) {
      this.performRegister();
    }
  }
  // Sends registration data to backend service
  performRegister() {
    this.registerService.registerUser('http://localhost:8080/api/customers/create', this.user)
      .subscribe({
        next: response => this.handleSuccessfulRegistration(response),
        error: errorResponse => this.handleRegistrationError(errorResponse)
      });
  }
  // Handles successful registration responses, navigating the user to the login page
  private handleSuccessfulRegistration(response: any): void {
    console.log('User registered:', response);
    this.router.navigate(['/login']);
  }
  // Handles any errors received during the registration process
  private handleRegistrationError(errorResponse: any): void {
    console.error('Registration error:', errorResponse);
    if (errorResponse.status === 400 && errorResponse.error && errorResponse.error.errors) {
      this.mapApiErrorsToFormFields(errorResponse.error.errors);
    } else {
      this.errors['General'] = 'An error occurred during registration.';
    }
  }
  // Maps backend errors to the corresponding form fields for display
  private mapApiErrorsToFormFields(apiErrors: any): void {
    for (const key in apiErrors) {
      if (apiErrors.hasOwnProperty(key)) {
        this.errors[key] = apiErrors[key];
      }
    }
  }
  // Clears backend error messages for a specific field when its value changes
  onFieldChange(fieldName: string): void {
    delete this.errors[fieldName];
  }
}






// import { Component } from '@angular/core';
// import { RegisterService } from 'src/app/user-account-services/register-service.service'; // Uuendatud tee
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-registerpage',
//   templateUrl: './registerpage.component.html',
//   styleUrls: ['./registerpage.component.css']
// })
// export class RegisterpageComponent {
//   user: {
//     firstName?: string,
//     lastName?: string,
//     username?: string,
//     email?: string,
//     password?: string
//   } & { [key: string]: string | undefined } = {};
//   errors: { [key: string]: string } = {};
//   formFields = [
//     {name: 'firstName', label: 'First Name', type: 'text', placeholder: 'Your firstname', required: true},
//     {name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Your lastname', required: true},
//     {name: 'username', label: 'Username', type: 'text', placeholder: 'Your username', required: true},
//     {name: 'email', label: 'Email', type: 'email', placeholder: 'Your email', required: true},
//     {name: 'password', label: 'Password', type: 'password', placeholder: 'Your password', required: true},
//     // add other form fields as per your requirements
//   ];
//   constructor(private registerService: RegisterService, private router: Router) { }
//   onSubmit() {
//     // Perform validation first
//     this.resetErrors();
//     const isValid = this.validateForm();
//     // Only perform registration if the form is valid
//     if(isValid) {
//       this.performRegister();
//     }
//   }
//   resetErrors(): void {
//     this.errors = {};
//   }
//   validateForm(): boolean {
//     let isValid = true;
//     this.formFields.forEach(field => {
//       if (field.required && !this.user[field.name]) {
//         this.errors[field.name] = `${field.label} is required.`;
//         console.log(this.errors[field.name])
//         isValid = false;
//       }
//     });
//     return isValid;
//   }
//   performRegister() {
//     this.registerService.registerUser('http://localhost:8080/api/customers/create', this.user)
//       .subscribe({
//         next: response => this.handleSuccessfulRegistration(response),
//         error: errorResponse => this.handleRegistrationError(errorResponse)
//       });
//   }
//   private handleSuccessfulRegistration(response: any): void {
//     console.log('User registered:', response);
//     this.errors = {};
//     this.router.navigate(['/login']);
//   }
//   private handleRegistrationError(errorResponse: any): void {
//     console.error('Registration error:', errorResponse);
//     if (errorResponse.status === 400 && errorResponse.error && errorResponse.error.errors) {
//       this.mapApiErrorsToFormFields(errorResponse.error.errors);
//     } else {
//       this.errors['General'] = 'An error occurred during registration.';
//     }
//   }
//   private mapApiErrorsToFormFields(apiErrors: any): void {
//     for (const key in apiErrors) {
//       if (apiErrors.hasOwnProperty(key)) {
//         this.errors[key] = apiErrors[key];
//       }
//     }
//   }
// }



// import { Component, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';

// import { Router } from '@angular/router';
// import { RegisterService } from 'src/app/user-account-services/register-service.service';
// @Component({
//   selector: 'app-registerpage',
//   templateUrl: './registerpage.component.html',
//   styleUrls: ['./registerpage.component.css']
// })
// export class RegisterpageComponent {
//   errors: any = {};
//   errorFieldMap: any = {
//     'firstName': 'First Name',
//     'lastName': 'Last Name',
//     'email': 'Email',
//     'username': 'Username',
//     'password': 'Password'
//   };
//   registerUser = {
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: '',
//     password: ''
//   };
//   @ViewChild('registrationForm') loginForm!: NgForm;
//   constructor(private registerService: RegisterService, private router: Router) { } // Muudetud postService -> registerService
//   onSubmit() {
//     if (this.loginForm.valid) {
//       console.log(this.errors)
//       this.performLogin();
//     } else {
//       this.handleValidationError();
//       console.log(this.errors)
//     }
//   }
//   performLogin() {
//     this.registerService.registerUser('http://localhost:8080/api/customers/create', this.registerUser)
//       .subscribe({
    
//         next: response => this.handleSuccessfulLogin(response),
//         error: errorResponse => this.handleLoginError(errorResponse),
//         complete: () => console.log('Request completed')
        
//       });
      
     
//   }
//   Front-end validation
//   handleValidationError() {
//     this.errors = 'Please make sure all fields are filled out correctly.';
//   }
//   handleSuccessfulLogin(response: any) {
//     console.log('User registered:', response);
//           Reset errors when the request succeeds
//           this.errors = {};
//           this.router.navigate(['/login']); // Käivitatakse pärast edukat registreerimist
//   }
//   Backend errors
//   handleLoginError(errorResponse: any) {
//     console.error('Registration error:', errorResponse);
//           if (errorResponse.status === 400 && errorResponse.error && errorResponse.error.errors) {
//             Map API errors to form fields and display error messages
//             const apiErrors = errorResponse.error.errors;
//             this.errors = {};
//             for (const key in apiErrors) {
//               if (apiErrors.hasOwnProperty(key) && this.errorFieldMap[key]) {
//                 this.errors[this.errorFieldMap[key]] = apiErrors[key];
//               }
//             }
//           } else {
//             Handle other error cases
//             this.errors = { 'General Error': 'An error occurred.' };
//           }
        
      
// }}