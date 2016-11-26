import { Injectable } from '@angular/core';
import { ReadCartResponse, AddToCartRequest, AddToCartResponse,
  CartInfoResponse, Response, CheckoutOptionsResponse } from '../../api';
import { delay } from '../util';

@Injectable()
export class CartService {

  constructor() { }

  readCart():Promise<ReadCartResponse> {
    return delay({status:"OK", data:[]});
  }

  addToCart(req: AddToCartRequest):Promise<AddToCartResponse> {
    return delay({status:"OK", data: {item_count:3, total_price:10}});
  }

  cartInfo():Promise<CartInfoResponse> {
    return delay({status:"OK", data: {item_count:3, total_price:10}});
  }

  removeFromCart(product_id:string):Promise<Response> {
    return delay({status:"OK"});
  }

  checkoutOptions():Promise<CheckoutOptionsResponse> {
    return delay({delivery_opts:[], payment_opts: []});
  }

}
