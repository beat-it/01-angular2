import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { CartWidgetComponent } from './cart-widget/cart-widget.component';


// const routes:Routes = [
//   {path: '/cart', component: }
// ];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CartWidgetComponent],
  declarations: [CartComponent,
    CartWidgetComponent],
})
export class CartModule { }
