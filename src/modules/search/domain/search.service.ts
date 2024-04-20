import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/domain/model/product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  private getProductsList(): Observable<Product[]> {
    const getProductsList = `http://localhost:3000/new_products`;

    return this.httpClient.get<Product[]>(`${getProductsList}`);
  }

  public getQueryProducts(query: string): Observable<Product[]> {
    let queryProducts: Product[] = [];
    const queryLowerCase: string = query.toLowerCase();

    return new Observable<Product[]>((observer) => {
      this.getProductsList().subscribe((productsResult: Product[]) => {

        productsResult.forEach((product: Product) => {
          const productName = product.name.toLowerCase().split(" ");
          if (productName.includes(queryLowerCase)) {
            queryProducts.push(product);
          }
        });
        observer.next(queryProducts);
        observer.complete();
      });
    });
  }
}
