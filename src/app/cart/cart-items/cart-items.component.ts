import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem, CheckoutOption, ReadCartResponse, PaymentInfo } from '../../../api/';
import { Action } from '../cart-item-list/cart-item-list.component';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent {
  cart:Observable<ReadCartResponse>
  items:Observable<CartItem[]>;
  payment:Observable<PaymentInfo>;

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
    this.cart = this.service.cart$;
    this.items = this.cart.map((c) => c.cartItems).distinctUntilChanged();
    this.payment = this.cart.map((r) => r.payment).distinctUntilChanged();
    this.service.readCart();
  }

  setPaymentOpt(opt:string) {
    //this.payment_opt = opt;
    console.log("Payment option",opt);
    this.service.setPayment(opt);
  }

  setDeliveryOpt(opt:string) {
    this.service.setDelivery(opt);
  }

  doAction(a:Action) {
    switch (a.action) {
      case this.actions[0]:
        this.service.removeFromCart(a.item.productId)
        break;
      default:
        console.log(a.action, a.item);
    }
  }

}
