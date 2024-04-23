import { ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckoutItem } from '../domain/checkout-item';
import { Checkout } from '../domain/checkout';
import { CheckoutService } from '../domain/services/checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css'
})

export class CheckoutPage implements OnInit {
  checkout: Checkout;
  checkoutItems: CheckoutItem[];
  quantityOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  loading: boolean = false;

  constructor(
    private checkoutService: CheckoutService,
    private router: Router
) { }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.loading = true;

    this.checkoutService.getCart().subscribe((checkout: Checkout) => {
      this.checkout = checkout;
      this.checkoutItems = checkout?.items;
      
      setTimeout(() => {
      this.loading = false;
    }, 1000); 
    });
  }

  updateCart(item: CheckoutItem) {
  this.checkoutService.updateItemQuantity(item, item.quantity).subscribe(() => {
    this.loadCart();
  });
}


  clearCart(): void {
    this.checkoutService.clearCart().then(() => {
      this.loadCart();
    }).catch(error => {
      console.error("Erro ao limpar carrinho:", error);
    });
  }

  finishCheckout(): void {
    alert("Compra finalizada! Obrigado por escolher a ShopVegan :)");
    this.clearCart();
    this.router.navigate(["/"]);
  }
}
