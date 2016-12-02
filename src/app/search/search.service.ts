import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { ProductResponse, Product } from '../../api';
import * as be from '../backend';

export type SearchQuery = string;
export { ProductResponse } from '../../api';
/*
name: string;
price: number;
currency: string;
description?: string;
rating?: number;
image?: {
  url: string;
  thumbnail_url: string;
  catalog_url: string;
};
*/
const lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet neque ultricies suscipit congue. Pellentesque iaculis mi nec placerat condimentum. Nullam at metus volutpat, gravida eros ac, aliquam metus. Nullam convallis, mi at luctus convallis, turpis risus pretium neque, nec auctor purus lectus sit amet enim. Nunc porta neque in varius pretium. Vivamus lacinia metus eget dui aliquam, sed finibus tellus interdum.";
const placeholder_image = {
  url: "http://placehold.it/400x500/ffffff",
  thumbnail_url: "http://placehold.it/200x250/ffffff"
};

const sampleData:Product[] = [
  {
    productId: "01",
    name: "ZiZi",
    price: 150,
    currency: "EUR",
    description: lorem_ipsum,
    rating: 3,
    image: placeholder_image
  },
  {
    productId: "02",
    name: "Kiwi J",
    price: 250,
    currency: "EUR",
    description: lorem_ipsum,
    rating: 2,
    image: placeholder_image
  },
  {
    productId: "03",
    name: "Angular 2",
    price: 50,
    currency: "EUR",
    description: lorem_ipsum,
    rating: 5,
    image: placeholder_image
  },
];

@Injectable()
export class SearchService {
  private baseUrl:string;

  constructor(private http:Http, @Inject(be.BACKEND_CONFIG) private backendConfig:be.BackendConfig) {
    this.baseUrl = backendConfig.baseUrl;
   }

  search(query:SearchQuery) : Promise<ProductResponse> {
    console.log("SearchService: search",query);
    return this.http.get(`${this.backendConfig.baseUrl}/catalog/search/${query}`)
      .do((r) => console.log('search response', r))
      .map((r) => r.json()).toPromise();
  }

  homepage() : Promise<ProductResponse> {
    return this.http.get(`${this.backendConfig.baseUrl}/catalog/homepage`)
      .map((r) => r.json()).toPromise();
  }
}
