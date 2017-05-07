import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

//http://embed.plnkr.co/TIPmK3/?show=preview

@Injectable()
export class AuthGuard implements CanActivate {

    isLogged: boolean = false;

    constructor (private router: Router) { }

    canActivate () {

        if (localStorage.getItem('currentUser'))
            this.isLogged = true;
        else {

            this.isLogged = false;
            this.router.navigate(['/login']);
        }
        
        return this.isLogged;
    }
}