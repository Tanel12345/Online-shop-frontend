import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  postserviceerrors: { [key: string]: string } = {}; // Initialize as an empty object
  errorFieldMap: any = {
    'firstName': 'First Name',
    'lastName': 'Last Name',
    'email': 'Email',
    'username': 'Username',
    'password': 'Password'

  };

registerUser(url: string, user: any){
  console.log(user);
 
  return this.http.post<CustomerResponse>(url, user) 
    
  }
  loginUser(url: string, user: any){
    
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    const body = new URLSearchParams();
    body.set('username', user.username);
    body.set('password', user.password);
    console.log("teine"+body.toString());
    return this.http.post<LoginCustomerResponse>(url, body.toString(), { headers }) 
      
    }


  }
  interface CustomerResponse {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    createdAt: string;
    email: string;
  }
  interface LoginCustomerResponse {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    createdAt: string;
    email: string;
    userType: string;
  }

  















