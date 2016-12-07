import { Component, OnInit } from '@angular/core';
import { BillingData } from '../../../api';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-contact',
  templateUrl: './cart-contact.component.html',
  styleUrls: ['./cart-contact.component.css']
})
export class CartContactComponent implements OnInit {
  company_order: boolean = false;
  constructor(private cart:CartService) { }

  ngOnInit() {
  }

  submit(form) {
    console.log(form.value);
    const v = form.value;
    const billingData:BillingData = {
      person: v.person,
      billingAddress: {
        billingAddress: v.billing_address,
        company: v.company ? form.value.company_data : undefined
      },
      address: v.delivery_address
    };
    this.cart.updateBillingData(billingData);
  }

}
