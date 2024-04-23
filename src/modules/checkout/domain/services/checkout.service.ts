import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../../shared/domain/services/local-storage.service';
import { Observable, of } from 'rxjs';
import { Checkout } from '../checkout';
import { Product } from '../../../shared/domain/model/product';
import { CheckoutItem } from '../checkout-item';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private storage: LocalStorageService,     
) { }

  public getCart(): Observable<Checkout> {
    return of(this.getStorageItems());

  }

private getStorageItems(): { items: CheckoutItem[], total_price: number } {
  const productsInCart: CheckoutItem[] = this.storage.get('cart') || [];
  let totalPrice = 0;

  for (const item of productsInCart) {
    totalPrice += item.price * item.quantity;
  }

  return { items: productsInCart, total_price: totalPrice };
}

public updateItemQuantity(item: CheckoutItem, quantity: number): Observable<void> {
  return new Observable<void>((observer) => {
    const cartItems: CheckoutItem[] = this.storage.get('cart') || [];
    
    const index = cartItems.findIndex(product => product.id === item.id);

    if (index !== -1) {
      cartItems[index].quantity = quantity;
      
      this.storage.set('cart', cartItems);
    }

    observer.next(); 
    observer.complete(); 
  });
}

  public clearCart(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.storage.clear();
        resolve(); 
      } catch (error) {
        reject(error); 
      }
    });
  }
}
