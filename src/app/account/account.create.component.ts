import { Component } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class AccountCreateContext extends BSModalContext {

    constructor () { super(); }
}

@Component({ selector: 'account-create', templateUrl: 'account.create.component.html' })
export class AccountCreateComponent implements ModalComponent<AccountCreateContext> {

    context: AccountCreateContext;

    constructor(public dialog: DialogRef<AccountCreateContext>) {  

        this.context = this.dialog.context;
    }
}