import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../api';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() order = new EventEmitter<string>();

  constructor() {  }

  ngOnInit() {}
}
