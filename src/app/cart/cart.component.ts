import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Observable } from 'rxjs/Rx';
import { CartInfo } from '../../api';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  info:Observable<CartInfo>

  constructor(private cart:CartService) {
    this.info = cart.cartInfo$;
  }

  ngOnInit() {
  }

}
