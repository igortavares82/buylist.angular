import { Component, ViewContainerRef } from '@angular/core';
import { Account } from '../_models/account';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({ selector: 'account', templateUrl: 'account.component.html' })
export class AccountComponent {

    accounts: Account[] = [];

    constructor (private router: Router, 
                 private accountsService: AccountService, 
                 public modal: Modal, 
                 overlay: Overlay, 
                 vcRef: ViewContainerRef) {

        this.accounts = this.accountsService.getAccounts();
        overlay.defaultViewContainer = vcRef;
    }

    create() {

        this.modal
            .alert()
            .showClose(true)
            .size('lg')
            .title('Test')
            .body(`<p>modal test!!!</p>`)
            .open();
    }
}