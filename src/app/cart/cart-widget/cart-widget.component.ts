import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs/Rx';
import { CartInfo } from '../../../api';

@Component({
  selector: 'cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.css']
})
export class CartWidgetComponent implements OnInit {
  info:Observable<CartInfo>

  constructor(private cart:CartService) {
    this.info = cart.cartInfo$;
  }

  ngOnInit() {
  }
}
