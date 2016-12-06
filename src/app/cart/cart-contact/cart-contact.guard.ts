import { Injectable } from '@angular/core';
import { CartService } from '../cart.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class CartContactGuard implements CanActivate {

    constructor(private cart: CartService, private router:Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("check",route, state);
        const result = this.cart.isPaymentSet() && this.cart.isDeliverySet();
        if (!result) {
            // THREE. HOURS. https://github.com/angular/angular/issues/12851
            this.router.navigate([this.router.url]);
        }
        return result;
    }
}