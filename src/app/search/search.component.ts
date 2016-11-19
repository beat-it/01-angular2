import { Component, OnInit, Injectable } from '@angular/core';
import { SearchService, SearchResult } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
@Injectable()
export class SearchComponent implements OnInit {
  loading: boolean = false;
  results: SearchResult;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  searchDone(results: SearchResult) {
    console.log("Got results", results);
    this.results = results;
    this.loading = false;
  }

  search(query:string) {
    console.log("SearchComponent: search ",query);
    this.loading = true;
    this.searchService.search(query).then(
      (r) => this.searchDone(r),
      (e) => console.error("Cannot load results",e)
    );
  }

}
