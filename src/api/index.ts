export type ResponseStatus = "OK" | "ERROR";

export interface Product {
    id: string,
    name: string;
    price: number;
    currency: string;
    description?: string;
    rating?: number;
    image?: {
      url: string;
      thumbnail_url: string;
      catalog_url?: string;
    };
}

export interface Response {
  status: ResponseStatus;
}

export interface ProductResponse extends Response {
  data: Product[];
}

export interface DeleteFromCartResponse extends Response { }

export interface AddToCartRequest {
    quantity: number;
    product_id: string;
}

export interface AddToCartResponse extends Response {
  data: {
    item_count: number,
    total_price: number
  }
}

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
  total_price: number;
}

export interface ReadCartResponse extends Response {
  data: CartItem[];
}

export interface CheckoutOption {
  id: string;
  price: number;
}

export interface CheckoutOptionsResponse extends Response {
  data: {
    delivery_opts: CheckoutOption[];
    payment_opts: CheckoutOption[];
  }
}
