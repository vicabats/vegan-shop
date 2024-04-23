import { Component, OnInit, Query } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/domain/model/product';
import { SearchService } from '../domain/search.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ProductAddToCartService } from '../../shared/domain/services/product-add-to-cart.service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css'
})
export class SearchPage implements OnInit {
  query: string = "";
  queryProducts: Product[];

  constructor(private activatedRoute: ActivatedRoute,
    private searchService: SearchService,
    private router: Router,
    private productAddToCart: ProductAddToCartService,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    const query = this.activatedRoute.snapshot.params['query'];
    this.query = query;
    this.getProductsByQuery(query);
  }

  getProductsByQuery(query: string): void {
    this.searchService.getQueryProducts(query).subscribe((queryItems: Product[]) => this.queryProducts = queryItems);
  }

  redirectToProductDetails(product: Product): void {
    this.router.navigate(['/product', product.id]);
  }

  addToCart(product: Product): void {
    this.productAddToCart.addToCart(product);
  }


}
