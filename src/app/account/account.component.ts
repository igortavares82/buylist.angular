import { Component, ViewContainerRef } from '@angular/core';
import { Account } from '../_models/account';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms'

import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { AccountCreateComponent, AccountCreateContext } from './account.create.component';


@Component({ selector: 'account', templateUrl: 'account.component.html', providers: [Modal] })
export class AccountComponent {

    accounts: Account[] = [];
    state: boolean = false;

    constructor (private router: Router, 
                 private accountsService: AccountService, 
                 public modal: Modal, 
                 overlay: Overlay, 
                 vcRef: ViewContainerRef,
                 private builder: FormBuilder) {

        this.accounts = this.accountsService.get();
        overlay.defaultViewContainer = vcRef;
    }

    create() {
        
        this.modal.open(AccountCreateComponent, overlayConfigFactory({ n1: 2, n2: 3 }, BSModalContext));
    }
}