import { Component } from '@angular/core';
import { ProductService, Products } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

 
  products: Products[] = [];
 

   queryParam = {
    categoryId: 3,
  };

  pathParameter: number = 1;




 constructor(private productService: ProductService){}

ngOnInit(): void {
  this.getAllProducts();
}

getProductsWithPathParam(): void {
  this.productService.getProductsByCategoryWithPathParameter(this.pathParameter)
  .subscribe((data: Products[]) => {
    this.products = data; // Update the products array with the data from the service
    console.log('Products:', this.products); // Log the products array
  });
}

getAllProducts(): void {
  this.productService.getAllProducts()
  .subscribe((data: Products[]) => {
    this.products = data; // Update the products array with the data from the service
    console.log('Products:', this.products); // Log the products array
  });
}

}
