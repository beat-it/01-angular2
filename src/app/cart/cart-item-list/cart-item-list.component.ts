import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../../api';

export type Action = {
  action: string,
  item: CartItem
};

@Component({
  selector: 'cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit {
  @Input() actions:string[];
  @Input() items: CartItem[];
  @Output() action = new EventEmitter<Action>();

  constructor() { }

  ngOnInit() {
  }

  emitAction(action:string, item:CartItem) {
    this.action.emit({action, item});
  }

}
