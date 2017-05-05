import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

//http://embed.plnkr.co/TIPmK3/?show=preview

@Injectable()
export class AuthGuard implements CanActivate {

    constructor (private router: Router) { }

    canActivate () {

        if (localStorage.getItem('currentUser'))
            return true;

        this.router.navigate(['/login']);
        return false;
    }
}