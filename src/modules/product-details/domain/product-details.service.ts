import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize, tap } from 'rxjs';
import { Product } from '../../shared/domain/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private httpClient: HttpClient) { }

  private getProductsList(): Observable<Product[]> {
    const getNewProductsUrl = `http://localhost:3000/new_products`;

    return this.httpClient.get<Product[]>(`${getNewProductsUrl}`);
  }

  public getProductDetails(id: number): Observable<Product> {
    return new Observable<Product>((observer) => {
      this.getProductsList().subscribe((productsResult: Product[]) => {
        const filteredProduct = productsResult.find((product: Product) => product.id == id);
        observer.next(filteredProduct);
        observer.complete();
      });
    });
  }

}
