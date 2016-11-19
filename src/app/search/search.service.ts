import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export type SearchQuery = string;

export type SearchResultItem = {
  id: string,
  name: string,
  price: number,
  description: string,
  image: string
};

export type SearchResult = {
   results: SearchResultItem[];
}

export class SearchService {

  constructor() { }

  search(query:SearchQuery) : Promise<SearchResult> {
    console.log("SearchService: search",query);
    // vraciame asynchronny objekt - prislub ukoncenia vyhladavania.
    return new Promise<SearchResult>(
      resolve =>
        // posli vysledok o pol sekundy
        window.setTimeout(() => resolve({results:[]}), 500));
  }
}
