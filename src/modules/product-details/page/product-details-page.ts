import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from '../domain/product-details.service';
import { Product } from '../../shared/domain/model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details-page.html',
  styleUrl: './product-details-page.css'
})
export class ProductDetailsPage implements OnInit {
  product: Product

  constructor(private activatedRoute: ActivatedRoute, private productDetailsService: ProductDetailsService) { }

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.params['id'];
    this.getProductDetails(productId);
  }

  getProductDetails(productId: number): void {
    this.productDetailsService.getProductDetails(productId).subscribe((returnedProduct: Product) => {
      this.product = returnedProduct
    });
  }

  addToCart(): void {
    this.productDetailsService.addToCart(this.product);
  }
}
