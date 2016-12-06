import { Injectable, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import * as be from '../backend';
import {
  ReadCartResponse, AddToCartRequest, AddToCartResponse,
  CartInfoResponse, Response, CheckoutOptionsResponse, CartItem, CartInfo, CheckoutOption
} from '../../api';
import { delay } from '../util';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

const placeholder_image = {
  url: "http://placehold.it/400x500/ffffff",
  thumbnail_url: "http://placehold.it/80x60/ffffff"
};

const sample_options = {
  delivery_opts: [
    { id: "KURIER", price: 4 },
    { id: "BALIK_NA_ADRESU", price: 3 },
    { id: "BALIK_NA_POSTU", price: 2 }

  ],
  payment_opts: [
    { id: "KARTA", price: 2 },
    { id: "PREVODOM", price: 0 },
    { id: "DOBIERKA", price: 2.5 }
  ]
};

@Injectable()
export class CartService implements OnInit {

  constructor(private backend: be.BackendService) { }

  private _cartInfo = new BehaviorSubject<CartInfo>({ count: 0, totalPrice: 0 })
  private _cart = new BehaviorSubject<ReadCartResponse>({
    cartItems: [],
    payment: {
      totalPrice: 0,
      itemsPrice: 0,
      deliveryPrice: 0,
      deliveryType: "",
      paymentMethod: "",
      transactionPrice: 0,
    },
  });


  public cartInfo$: Observable<CartInfo> = this._cartInfo;
  public cart$: Observable<ReadCartResponse> = this._cart;

  ngOnInit() {
    this.cartInfo();
  }

  readCart(): Promise<ReadCartResponse> {
    return this.backend.get(`/cart`)
      .do((r) => this.updateCart(r))
      .toPromise();
  }

  private updateCart(r: Response) {
    const cart = r as ReadCartResponse;
    this._cart.next(cart);
    this._cartInfo.next({ totalPrice: cart.payment.itemsPrice, count: cart.cartItems.length });
  }

  addToCart(req: AddToCartRequest): Promise<AddToCartResponse> {
    return this.backend.post(`/cart/items`, req)
      .do((r) => this.cartInfo())
      .toPromise();
  }

  cartInfo(): Promise<CartInfoResponse> {
    return this.backend.get(`/cart/info`)
      .do((r) => this._cartInfo.next(r as CartInfoResponse))
      .toPromise();
  }

  removeFromCart(product_id: string): Promise<Response> {
    return this.backend.delete(`/cart/items/${product_id}`)
      .do((r) => this.readCart())
      .toPromise();
  }

  checkoutOptions(): Promise<CheckoutOptionsResponse> {
    // joining two backend calls
    return this.backend.get(`/cart/payment`)
      .zip(this.backend.get(`/cart/delivery`))
      .map(([payment, delivery]) => ({
        payment_opts: payment,
        delivery_opts: delivery,
      })).do((r) => console.log("Delivery options", r)).toPromise();
  }

  setDelivery(deliveryType: string):Promise<ReadCartResponse> {
    return this.backend.put(`/cart`, {deliveryType, paymentMethod: this._cart.value.payment.paymentMethod})
      .do((r) => this.updateCart(r))
      .toPromise();
  }

  setPayment(paymentMethod: string):Promise<ReadCartResponse> {
    return this.backend.put(`/cart`, {deliveryType: this._cart.value.payment.deliveryType, paymentMethod})
      .do((r) => this.updateCart(r))
      .toPromise();
  }

  isPaymentSet() {
    return !!this._cart.value.payment.paymentMethod;
  }

  isDeliverySet() {
    return !!this._cart.value.payment.deliveryType;
  }

  hasItems() {
    return this._cart.value.cartItems.length > 0;
  }

}
