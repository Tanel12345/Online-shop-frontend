import { Component, Input, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { SharedService } from 'src/app/services/shared-service.service';
import { LoginResponse } from 'src/app/user-account-services/login-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  categoryFields: any;
  url: string = 'http://localhost:8080/category'
  logedinuser: any;

constructor(private productService: ProductService, private sharedService: SharedService){}

@Input() userData: LoginResponse | undefined;
ngOnInit(): void {
  this.getProductFields();
  this.sharedService.loggedInUser$.subscribe((firstName) => {
    this.logedinuser = firstName;
  });

  
}
ngOnChanges(changes: SimpleChanges) {
  // Handle changes in the userData input
  if (changes['userData'] && changes['userData'].currentValue) {
    console.log(changes['userData'].currentValue);
  }
}

getProductFields(): void {
  this.productService.getCategories(this.url).subscribe({
    next: (data) => {
      this.categoryFields = data;
      console.log('Product Fields:', this.categoryFields);

      console.log("cccc"+this.categoryFields[0]);
    },
    error: (error) => {
      console.error('Error fetching product fields:', error);
    }
});
}


}
