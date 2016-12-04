import { Injectable, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import * as be from '../backend';
import { ReadCartResponse, AddToCartRequest, AddToCartResponse,
  CartInfoResponse, Response, CheckoutOptionsResponse , CartItem, CartInfo, CheckoutOption} from '../../api';
import { delay } from '../util';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

const placeholder_image = {
  url: "http://placehold.it/400x500/ffffff",
  thumbnail_url: "http://placehold.it/80x60/ffffff"
};

const sample_options = {
  delivery_opts:[
    {id: "KURIER", price: 4},
    {id: "BALIK_NA_ADRESU", price: 3},
    {id: "BALIK_NA_POSTU", price: 2}    

  ],
  payment_opts: [
    {id: "KARTA", price: 2},
    {id: "PREVODOM", price: 0},
    {id: "DOBIERKA", price: 2.5}
  ]
};

@Injectable()
export class CartService implements OnInit {

  constructor(private backend:be.BackendService) {  }

  private _cartInfo = new BehaviorSubject<CartInfo>({count: 0, totalPrice:0});
  public cartInfo$: Observable<CartInfo> = this._cartInfo;

  ngOnInit() {
    this.cartInfo();
  }

  readCart():Promise<ReadCartResponse> {
    return this.backend.get(`/cart`).toPromise();
  }

  addToCart(req: AddToCartRequest):Promise<AddToCartResponse> {
    return this.backend.post(`/cart/items`, req)
    .do((r) => this.cartInfo())
    .toPromise();
  }

  cartInfo():Promise<CartInfoResponse> {
    return this.backend.get(`/cart/info`)
      .do((r) => this._cartInfo.next(r as CartInfoResponse))
      .toPromise();
  }

  removeFromCart(product_id:string):Promise<Response> {
    return this.backend.delete(`/cart/items/${product_id}`).toPromise();
  }

  checkoutOptions():Promise<CheckoutOptionsResponse> {

    // joining two backend calls
    return this.backend.get(`/cart/payment`)
        .zip(this.backend.get(`/cart/delivery`))
        .map( ([payment, delivery]) => {
          return {
            payment_opts: payment,
            delivery_opts: delivery,
        }}).do((r) => console.log("Delivery options",r)).toPromise();
  }

}
