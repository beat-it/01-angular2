import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem, CheckoutOption } from '../../../api/';
import { Action } from '../cart-item-list/cart-item-list.component';

@Component({
  selector: 'cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  items:Promise<CartItem[]>;
  delivery_opts: Promise<CheckoutOption[]>;
  payment_opts: Promise<CheckoutOption[]>;

  delivery_opt: CheckoutOption;
  payment_opt: CheckoutOption;

  readonly actions=['Vymazať'];

  constructor(private service:CartService) {
    this.items = service.readCart().then((r) => r.data);
    var co_opts = service.checkoutOptions();
    this.delivery_opts = co_opts.then((r) => r.data.delivery_opts);
    this.payment_opts = co_opts.then((r) => r.data.payment_opts);
  }

  doAction(a:Action) {
    console.log(a.action, a.item);
  }

  ngOnInit() {
  }

}
