import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

//Tegemist on post meetodiga mille payload on x-form-urlencoded formaadis. api püüab seda @Recuestparam iga.

// export class LoginService {
//   constructor(private http: HttpClient) {}
//   loginUser(url: string, user: any){
//     const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
//     const body = new URLSearchParams();
//     body.set('email', user.email);
//     body.set('password', user.password);
//     console.log("Login body: " + body.toString());
//     return this.http.post<LoginCustomerResponse>(url, body.toString(), { headers, withCredentials: true })     withCredentials: true lisatakse kui soovitakse coocie recuestile kaasa anda.Default on false ehk ei pea lisama
//   }
// }
// interface LoginCustomerResponse {
//   firstName: string;
//   username: string;
//   userType: string;
// }

//Siin on payload json. Api peab olema vastavalt kohandatud
export class LoginService {
  constructor(private http: HttpClient) {}

  loginUser(url: string, user: any): Observable<LoginResponse> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'}); // Set content type to application/json
    const body = JSON.stringify(user); // Convert user object to JSON string
    console.log("Login body: " + body);
    
    return this.http.post<LoginResponse>(url, body, { headers});
  }
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  firstName: string;
  secondName: string;
  email: string;
  role: string
  // Add other fields as needed
}






