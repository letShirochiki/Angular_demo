import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  private shippingCosts: Object;
  constructor(
    private cartservice: CartService,
  ) { }

  ngOnInit() {
    this.shippingCosts = this.cartservice.getShippingPrices();
  }

}