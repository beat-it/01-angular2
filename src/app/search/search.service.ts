import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { ProductResponse, Product } from '../../api';
import * as be from '../backend';

export type SearchQuery = string;
export { ProductResponse } from '../../api';

@Injectable()
export class SearchService {
  private baseUrl:string;

  constructor(private backend:be.BackendService) { }

  search(query:SearchQuery) : Promise<ProductResponse> {
    console.log("SearchService: search",query);
    return this.backend.get(`/catalog/search/${query}`)
      .do((r) => console.log('search response', r))
      .toPromise();
  }

  homepage() : Promise<ProductResponse> {
    return this.backend.get(`/catalog/homepage`).toPromise();
  }
}
