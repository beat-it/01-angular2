import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { CartWidgetComponent } from './cart-widget/cart-widget.component';
import { CartItemsComponent } from './cart-items/cart-items.component';


const routes: Routes = [
    {
        path: 'cart',
        component: CartComponent,
        // CartComponent obsahuje direktívu <router-outlet>. Jej obsah je
        // riadený URL za cart/ nasledovne:
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'items' },
            { path: 'items', component: CartItemsComponent },
        ],
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [CartWidgetComponent],
    declarations: [CartComponent,
        CartWidgetComponent,
        CartItemsComponent],
})
export class CartModule { }
