import { Component } from '@angular/core';
import { Account } from '../_models/account';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({ selector: 'account', templateUrl: 'account.component.html' })
export class AccountComponent {

    accounts: Account[] = [];

    constructor (private router: Router, private accountsService: AccountService) {}

    ngOnInit() {
        //console.log(123);
        this.accounts = this.accountsService.getAccounts();
    }
}