import { Component, OnInit } from '@angular/core';
import { BillingData } from '../../../api';

@Component({
  selector: 'app-cart-contact',
  templateUrl: './cart-contact.component.html',
  styleUrls: ['./cart-contact.component.css']
})
export class CartContactComponent implements OnInit {
  contact: BillingData = {
    delivery: '',
    payment: '',
    person: {
      first_name: '',
      surname: '',
      email:'',
    },
    billing_address: {
      address:'',
      city:'',
      zip:'',
      country:''
    }
  };

  constructor() { }

  ngOnInit() {
  }

  submit(form) {
    console.log(form);
  }

}
