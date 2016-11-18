import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output()
  search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleSearch(query:string) {
    console.log("SearchBar: Search for", query);
    this.search.emit(query);
    return false;
    // navratova hodnota event handleru. false zabrani browseru pokracovat vo
    // svojom normalnom spracovani eventu (odoslat formular)
  }

}
