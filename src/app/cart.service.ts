import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CartService {
  constructor(
    private http: HttpClient,
  ) {}

  items = [];
  addToCart(product): void {
    this.items.push(product);
  }

  getItems(): Array<any> {
    return this.items;
  }

  clearCart(): Array<any> {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Object {
    return this.http.get('/assets/shipping.json');
  }
}
