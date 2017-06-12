import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms'

import { Account } from '../_models/account';

//https://github.com/shlomiassaf/angular2-modal

export class AccountCreateContext extends BSModalContext {

    public n1: number;
    public n2: number;
}

@Component({ selector: 'account-create', 
             templateUrl: 'account.create.component.html', 
             providers:[FormBuilder], 
             styleUrls: ['account.component.css'] })
export class AccountCreateComponent implements ModalComponent<AccountCreateContext> {

    context: AccountCreateContext;

    username = new FormControl('', [Validators.required]);
    birth = new FormControl('', [Validators.required]);
    email = new FormControl('', [Validators.required]);

    accountForm: FormGroup = this.builder.group({

        username: this.username,
        birth: this.birth,
        email: this.email
    });

    constructor(public dialog: DialogRef<AccountCreateContext>, private builder: FormBuilder) {  

        this.context = this.dialog.context;
    }

    create() {

         console.log(this.accountForm.value)
    }
}