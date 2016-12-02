import { Component, OnInit } from '@angular/core';
import { BillingData } from '../../../api';

@Component({
  selector: 'app-cart-contact',
  templateUrl: './cart-contact.component.html',
  styleUrls: ['./cart-contact.component.css']
})
export class CartContactComponent implements OnInit {
  company_order: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  submit(form) {
    console.log(form);
  }

}
