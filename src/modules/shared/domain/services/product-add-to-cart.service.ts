import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { CheckoutItem } from '../../../checkout/domain/checkout-item';

@Injectable({
  providedIn: 'root'
})
export class ProductAddToCartService {

  constructor(
    private storage: LocalStorageService,     
    private router: Router
  ) { }

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
