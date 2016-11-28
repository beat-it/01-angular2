import { Injectable } from '@angular/core';
import { ReadCartResponse, AddToCartRequest, AddToCartResponse,
  CartInfoResponse, Response, CheckoutOptionsResponse , CartInfo} from '../../api';
import { delay } from '../util';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class CartService {

  constructor() { }

  private _cartInfo = new BehaviorSubject<CartInfo>({item_count: 0, total_price: 0});
  public cartInfo$: Observable<CartInfo> = this._cartInfo;

  readCart():Promise<ReadCartResponse> {
    return delay({status:"OK", data:[]});
  }

  addToCart(req: AddToCartRequest):Promise<AddToCartResponse> {
    return delay({status:"OK", data: {item_count:3, total_price:10}});
  }

  cartInfo():Promise<CartInfoResponse> {
    return delay({status:"OK", data: {item_count:3, total_price:10}})
      .then((response) => {this._cartInfo.next(response.data); return response});
  }

  removeFromCart(product_id:string):Promise<Response> {
    return delay({status:"OK"});
  }

  checkoutOptions():Promise<CheckoutOptionsResponse> {
    return delay({status: "OK", "data":{delivery_opts:[], payment_opts: []}});
  }

}
