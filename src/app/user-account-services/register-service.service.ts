import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  registerUser(url: string, user: any){
    console.log(user);
    return this.http.post<CustomerResponse>(url, user)
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












