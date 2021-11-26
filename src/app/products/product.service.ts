import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Iproduct } from './iproduct';
import{catchError,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl: string='assets/products/products.json';
  constructor(private http: HttpClient) { }
  getProducts():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(this.productUrl).pipe(
      tap(data=>console.log('all',JSON.stringify(data))),
      catchError(this.handleError)
    )
  
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}



