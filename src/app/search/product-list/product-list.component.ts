import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../api';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input()
  products: Product[];

  @Output()
  order = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
