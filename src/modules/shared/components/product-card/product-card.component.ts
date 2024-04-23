import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../domain/model/product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() addToCartClicked: EventEmitter<Product> = new EventEmitter<Product>();


  constructor(
) { }

  onProductClicked() {
    this.productClicked.emit(this.product);
  }

  onAddToCartClicked() {
    this.addToCartClicked.emit(this.product);
  }

}
