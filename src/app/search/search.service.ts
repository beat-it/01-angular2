import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductResponse } from '../../api';

export type SearchQuery = string;

export class SearchService {

  constructor() { }

  search(query:SearchQuery) : Promise<ProductResponse> {
    console.log("SearchService: search",query);
    // vraciame asynchronny objekt - prislub ukoncenia vyhladavania.
    return new Promise<ProductResponse>(
      resolve =>
        // posli vysledok o pol sekundy
        window.setTimeout(() => resolve({status:"OK", data:[]}), 500));
  }
}
