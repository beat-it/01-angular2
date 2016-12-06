import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart.component';
import { CartWidgetComponent } from './cart-widget/cart-widget.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';
import { CartContactComponent } from './cart-contact/cart-contact.component';
import { DisableGroupDirective } from './cart-contact/disable-group.directive';
import { CartContactGuard } from './cart-contact/cart-contact.guard';


const routes: Routes = [
    {
        path: 'cart',
        component: CartComponent,
        // CartComponent obsahuje direktívu <router-outlet>. Jej obsah je
        // riadený URL za cart/ nasledovne:
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'items' },
            { path: 'items', component: CartItemsComponent, },
            { path: 'contact', component: CartContactComponent, canActivate: [CartContactGuard]},
        ],
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
    ],
    exports: [CartWidgetComponent],
    declarations: [CartComponent,
        CartWidgetComponent,
        CartItemsComponent,
        CartItemListComponent,
        CartContactComponent,
        DisableGroupDirective],
    providers: [CartContactGuard]
})
export class CartModule { }
