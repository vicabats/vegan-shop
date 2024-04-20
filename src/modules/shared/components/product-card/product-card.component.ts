import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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


  constructor() { }

  onProductClicked() {
    this.productClicked.emit(this.product);
  }

  addToCart(): void {
    // Aqui você implementa a lógica para adicionar o produto ao carrinho
    // Você pode usar serviços, eventos ou outras técnicas dependendo de como o carrinho é gerenciado no seu aplicativo
    console.log('Produto adicionado ao carrinho:', this.product);
  }
}
