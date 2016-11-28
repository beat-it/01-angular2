import { Injectable } from '@angular/core';
import { ReadCartResponse, AddToCartRequest, AddToCartResponse,
  CartInfoResponse, Response, CheckoutOptionsResponse , CartItem, CartInfo} from '../../api';
import { delay } from '../util';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

const placeholder_image = {
  url: "http://placehold.it/400x500/ffffff",
  thumbnail_url: "http://placehold.it/80x60/ffffff"
};

const sampleData:CartItem[] = [
  {
    id: "01",
    name: "ZiZi",
    price: 150,
    currency: "EUR",
    rating: 3,
    image: placeholder_image,
    quantity: 5,
    total_price: 150*5,
  },
  {
    id: "02",
    name: "Kiwi J",
    price: 250,
    currency: "EUR",
    rating: 2,
    image: placeholder_image,
    quantity: 4,
    total_price: 4*250,
  },
  {
    id: "03",
    name: "Angular 2",
    price: 50,
    currency: "EUR",
    rating: 5,
    image: placeholder_image,
    quantity: 2,
    total_price: 2*50,
  },
];

@Injectable()
export class CartService {

  constructor() { }

  private _cartInfo = new BehaviorSubject<CartInfo>({item_count: 0, total_price: 0});
  public cartInfo$: Observable<CartInfo> = this._cartInfo;

  readCart():Promise<ReadCartResponse> {
    return delay({status:"OK", data:sampleData});
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
