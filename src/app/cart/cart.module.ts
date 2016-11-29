import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { CartWidgetComponent } from './cart-widget/cart-widget.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';
import { CartContactComponent } from './cart-contact/cart-contact.component';


const routes: Routes = [
    {
        path: 'cart',
        component: CartComponent,
        // CartComponent obsahuje direktívu <router-outlet>. Jej obsah je
        // riadený URL za cart/ nasledovne:
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'items' },
            { path: 'items', component: CartItemsComponent },
            { path: 'contact', component: CartContactComponent},
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
        CartItemsComponent,
        CartItemListComponent,
        CartContactComponent],
})
export class CartModule { }
