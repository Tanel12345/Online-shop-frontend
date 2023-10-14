import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getCategories(inputUrl: string): Observable<any> {
    
    return this.http.get(inputUrl);
  }

  getProducts(inputUrl: string, categoryId: number): Observable<Products[]> {
    // Create an HttpParams object with the categoryId as a query parameter
  const params = new HttpParams().set('categoryId', categoryId.toString());
  
    return this.http.get<Products[]>(inputUrl, { params }).pipe(
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
    }}
