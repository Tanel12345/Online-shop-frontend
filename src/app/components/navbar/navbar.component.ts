import { Component } from '@angular/core';
import { GetService } from 'src/app/services/get.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  categoryFields: any;
  url: string = 'http://localhost:8080/category'

constructor(private getService: GetService){}

ngOnInit(): void {
  this.getProductFields();
  
}

getProductFields(): void {
  this.getService.getCategories(this.url).subscribe({
    next: (data) => {
      this.categoryFields = data;
      console.log('Product Fields:', this.categoryFields);

      console.log("cccc"+this.categoryFields[0].name +"  "+data);
    },
    error: (error) => {
      console.error('Error fetching product fields:', error);
    }
});
}


}
