import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';


// const routes:Routes = [
//   {path: '/cart', component: }
// ];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CartComponent],
  declarations: [CartComponent],
})
export class CartModule { }
