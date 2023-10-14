import { Component } from '@angular/core';
import { GetService, Products } from 'src/app/services/get.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productTitle: String = 'Title';
  productDescription: String = 'Description';
  products: Products[] = [];
  url: string = 'http://localhost:8080/category'

   queryParam = {
    categoryId: 3,
  };

  pathParameter: number = 1;




 constructor(private getService: GetService){}

ngOnInit(): void {
  this.getProducts();
}

getProducts(): void {
  this.getService.getProductsByCategoryWithPathParameter(this.pathParameter)
  .subscribe((data: Products[]) => {
    this.products = data; // Update the products array with the data from the service
    console.log('Products:', this.products); // Log the products array
  });
}

}
