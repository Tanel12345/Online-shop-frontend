import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private loggedInUserSubject = new BehaviorSubject<any>(null);
  loggedInUser$ = this.loggedInUserSubject.asObservable();

  setLoggedInUser(user: any) {
    this.loggedInUserSubject.next(user);
  }
}
