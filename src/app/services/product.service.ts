import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  //Navbar component

  getCategories(inputUrl: string): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(inputUrl).pipe(
      catchError((error) => {
        console.error('Error getting categories:', error);
        return throwError(error); // Re-throw the error to propagate it to the subscriber
      })
    );
  }




  //Products component

  // Get all products
  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.baseUrl}/products`);
  }

  getProductsWithQueryParam(categoryId: number): Observable<Products[]> {
    // Create an HttpParams object with the categoryId as a query parameter
  const params = new HttpParams().set('categoryId', categoryId.toString());
  
    return this.http.get<Products[]>(this.baseUrl , { params }).pipe(
      catchError((error: any) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }


  getProductsByCategoryWithPathParameter(categoryId: number): Observable<Products[]> {
    const url = `${this.baseUrl}/category/${categoryId}`;
    return this.http.get<Products[]>(url);
  }





  
}
export interface Products{
  // Define the structure of your Products object here
  id: number;
    name: string;
    price: number;
    description: string;
    category: {
      id: number;
      name: string;
  // Add other properties as needed
    }}    export interface CategoryDTO {
      id?: number;
      name: string;
      // Add other properties as needed
    }
  
