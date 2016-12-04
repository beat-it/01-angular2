import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem, CheckoutOption, ReadCartResponse, PaymentInfo } from '../../../api/';
import { Action } from '../cart-item-list/cart-item-list.component';

@Component({
  selector: 'cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  cart:Promise<ReadCartResponse>
  items:Promise<CartItem[]>;
  payment:Promise<PaymentInfo>;

  delivery_opts: Promise<CheckoutOption[]>;
  payment_opts: Promise<CheckoutOption[]>;

  delivery_opt: CheckoutOption;
  payment_opt: CheckoutOption;

  readonly actions=['Vymazať'];

  constructor(private service:CartService) {
    var co_opts = service.checkoutOptions();
    this.delivery_opts = co_opts.then((r) => r.delivery_opts);
    this.payment_opts = co_opts.then((r) => r.payment_opts);
    this.loadCart();
  }

  loadCart() {
    this.cart = this.service.readCart()
    this.items = this.cart.then((r) => r.cartItems);
    this.payment = this.cart.then((r) => r.payment);
  }

  doAction(a:Action) {
    console.log(a.action, a.item);
  }

  ngOnInit() {
  }

}
