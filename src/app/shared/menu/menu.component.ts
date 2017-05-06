import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../_models/menu.item';
import { AuthGuard } from '../../_auth/auth.guard';

@Component({ selector: 'menu', templateUrl: 'menu.component.html' })
export class MenuComponent {
    
    isLogged: boolean = this.authGuard.canActivate();

    items = [new MenuItem('Account', '/account'), 
             new MenuItem('Logout','/logout')];

    constructor(private router: Router, private authGuard: AuthGuard) {  }

    navigate(event, route: string) {
        
        event.preventDefault();
        this.router.navigate([route]);
    }
}