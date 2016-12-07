import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BillingData, ReadCartResponse } from '../../../api';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs/rx';

@Component({
  selector: 'app-cart-contact',
  templateUrl: './cart-contact.component.html',
  styleUrls: ['./cart-contact.component.css']
})
export class CartContactComponent implements AfterViewInit, OnDestroy {
  @ViewChild('f')
  form: NgForm;

  subscription: Subscription;

  company_order: boolean = false;
  constructor(private cart:CartService) {
  }

  ngAfterViewInit() {
    this.form.controls
    this.subscription = this.cart.cart$.subscribe(c => {
        this.updateForm(c);
    });

  }

  updateForm(c:ReadCartResponse) {
    /*
      Forms controls subscribe some tick later. I don't know why,
      but I don't like form builder approach (yet).

      Angular says in runtime:

      There are no form controls registered with this group yet.  If you're using ngModel,
        you may want to check next tick (e.g. use setTimeout).
      */
    if (!this.form.controls['person']) {
      setTimeout(() => this.updateForm(c), 10);
      return;
    }
    const formValue = {
      person: c.person || {},
      billing_address: c.billingDetails && c.billingDetails.billingAddress || {},
      company_data: c.billingDetails && c.billingDetails.company || {},
      company: c.billingDetails && c.billingDetails.company !== undefined,
      delivery_address: c.address || {}
    };
    console.log("Setting value", formValue);
    this.form.reset(formValue);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
