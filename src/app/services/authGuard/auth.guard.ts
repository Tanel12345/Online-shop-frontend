import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // Check if the user is logged in. Modify this condition as needed.
    const isLoggedIn = this.cookieService.check('JSESSIONID'); // Adjust this based on your cookie setup
    console.log(isLoggedIn)

    if (isLoggedIn) {
      return true;
    } else {
      // If the user is not logged in, redirect them to the login page or any other appropriate route
      this.router.navigate(['/login']); // Adjust the route to your login page
      return false;
    }
  }
}