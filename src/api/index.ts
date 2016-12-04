export type ResponseStatus = "OK" | "ERROR";

export interface Product {
    productId: string,
    name: string;
    price: number;
    currency: string;
    description?: string;
    rating?: number;
    image?: {
      url: string;
      thumbnailUrl: string;
      catalogUrl?: string;
    };
}

export interface Response {
}

export interface ProductResponse extends Response {
  products: Product[];
}

export interface DeleteFromCartResponse extends Response { }

export interface AddToCartRequest {
    quantity: number;
    productId: string;
}

export interface CartInfo {
  count: number;
  totalPrice: number;
}
export type AddToCartResponse = CartInfo;

export type CartInfoResponse = AddToCartResponse

export interface Address {
  address: string;
  city: string;
  zip: string;
  country: string;
}

export interface BillingAddress extends Address {
  company?: {
    name: string;
    dic?: string;
    ico: string;
    ic_dph?: string;
  };
}

export interface BillingData {
  delivery: string;
  payment: string;
  person: {
    first_name: string;
    surname: string;
    email: string;
    phone?: string;
  };
  billing_address: BillingAddress;
  delivery_address?: Address;
}

export interface CartItem extends Product {
  quantity: number;
  // item price vs price
  totalPrice: number;
}

export interface PaymentInfo {
    totalPrice:number,
    itemsPrice: number,
    deliveryPrice: number,
    deliveryType: string,
    paymentMethod: string
}

export interface ReadCartResponse extends Response {
  cartItems: CartItem[];
  payment: PaymentInfo;

}

export interface CheckoutOption {
  id: string;
  price: number;
}

export interface CheckoutOptionsResponse extends Response {
    delivery_opts: CheckoutOption[];
    payment_opts: CheckoutOption[];
}
