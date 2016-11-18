import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  search(query:string) {
    console.log("Search for", query);
    return false;
    // navratova hodnota event handleru. false zabrani browseru pokracovat vo
    // svojom normalnom spracovani eventu (odoslat formular)
  }

}
