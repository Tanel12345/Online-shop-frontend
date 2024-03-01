import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  faLock = faLock

  userEmail = {inputedEmail: ""}
  @ViewChild('loginForm') loginForm!: NgForm;
  constructor( private router: Router) { }


onSubmit() {

}
}

