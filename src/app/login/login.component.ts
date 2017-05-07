import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

@Component({ selector: 'login', templateUrl:'login.component.html' })
export class LoginComponent {
    
    model: any = {};

    constructor (private router: Router, private authenticationService: AuthenticationService) { }

    login () {

        this.authenticationService.login(this.model.username, this.model.password).subscribe((result) => {

            if (result === true) 
                this.router.navigate(['/account']);
            else
                console.log('Error')
        });
    }
}