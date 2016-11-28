import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../../../api/';
import { Action } from '../cart-item-list/cart-item-list.component';

@Component({
  selector: 'cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  items:Promise<CartItem[]>;

  readonly actions=['Vymazať'];

  constructor(private service:CartService) {
    this.items = service.readCart().then((r) => r.data);
  }

  doAction(a:Action) {
    console.log(a.action, a.item);
  }

  ngOnInit() {
  }

}
