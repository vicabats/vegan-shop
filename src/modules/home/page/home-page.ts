import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/domain/model/product';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { HomeService } from '../domain/services/home.service';
import { Router } from '@angular/router';
import { ProductAddToCartService } from '../../shared/domain/services/product-add-to-cart.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage implements OnInit {
  public products: Product[] = [];

  constructor(
    private homeService: HomeService,
    private router: Router,
    private productAddToCart: ProductAddToCartService
  ) { }


  ngOnInit() {
    this.getNews();
  }

  private getNews() {
    this.homeService.getNewProducts().subscribe((productsResult: Product[]) => {
      this.products = productsResult;
    });
  }

  redirectToProductDetails(product: Product): void {
    this.router.navigate(['/product', product.id]);
  }

  addToCart(product: Product): void {
    this.productAddToCart.addToCart(product);
  }

}
