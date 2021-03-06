import { Component, OnInit, Injectable } from '@angular/core';
import { SearchService, ProductResponse } from './search.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
@Injectable()
export class SearchComponent implements OnInit {
  loading: boolean = false;

  constructor(private searchService: SearchService, private cart:CartService) { }

  // Tieto sú naviazané v šablóne
  results: ProductResponse | undefined;

  order(productId:string) {
    this.cart.addToCart({productId, quantity: 1});
  }
  hasResults() {
    return this.results && this.results.products.length > 0;
  }

  ngOnInit() {
    this.searchService.homepage().then((r) => this.searchDone(r));
  }

  searchDone(results: ProductResponse) {
    this.results = results;
    console.log("Got results", results);
    this.loading = false;
  }


  search(query:string) {
    console.log("SearchComponent: search ",query);
    this.loading = true;
    this.results = undefined;
    this.searchService.search(query).then(
      (r) => this.searchDone(r),
      (e) => console.error("Cannot load results",e)
    );
  }


}
