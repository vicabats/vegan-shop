import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize, tap } from 'rxjs';
import { Product } from '../../shared/domain/model/product';
import { LocalStorageService } from '../../shared/domain/services/local-storage.service';
import { Router } from '@angular/router';
import { CheckoutItem } from '../../checkout/domain/checkout-item';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private httpClient: HttpClient,
    private storage: LocalStorageService,     
    private router: Router
  ) { }

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

  public addToCart(product: Product): void {
        const productsInCart: CheckoutItem[] = this.storage.get('cart') || [];
    
    const existingItemIndex = productsInCart.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      productsInCart[existingItemIndex].quantity++;
    } else {
      const checkoutItem: CheckoutItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: 1 
      };
      
      productsInCart.push(checkoutItem);
    }

    this.storage.set('cart', productsInCart);
    this.router.navigate(['/checkout']);
  }

}
