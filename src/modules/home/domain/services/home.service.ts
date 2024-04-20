import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../../shared/domain/model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  public getNewProducts(): Observable<Product[]> {
    const getNewProductsUrl = `http://localhost:3000/new_products`;

    return this.httpClient.get<Product[]>(`${getNewProductsUrl}`);
  }

}
