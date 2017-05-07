import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../_models/menu.item';
import { AuthGuard } from '../../_auth/auth.guard';
import {Observable} from 'rxjs/Observable';

@Component({ selector: 'menu', templateUrl: 'menu.component.html' })
export class MenuComponent {
    
    isLogged: boolean;
    items = [new MenuItem('Account', '/account'), 
             new MenuItem('Logout','/logout')];
    
    constructor(private router: Router, private authGuard: AuthGuard) { this.isLogged = this.authGuard.canActivate() }

    ngOnInit() {

        window.setInterval(() => { this.isLogged = this.authGuard.canActivate() }, 500);
    }

    navigate(event, route: string) {
        
        event.preventDefault();
        this.router.navigate([route]);
    }
}