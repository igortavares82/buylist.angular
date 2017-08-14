import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms'
import { AccountService } from '../_services/account.service';
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
    email = new FormControl('', [Validators.required, Validators.email]);
    login = new FormControl('', [Validators.required]);
    password = new FormControl('', [Validators.required]);

    accountForm: FormGroup = this.builder.group({

        username: this.username,
        birth: this.birth,
        email: this.email,
        login: this.login,
        password: this.password
    });

    constructor(public dialog: DialogRef<AccountCreateContext>, private builder: FormBuilder, private accountService: AccountService) {  

        this.context = this.dialog.context;
    }

    create() {

        let account: Account = new Account();

        account.name = this.accountForm.value.username;
        account.birth = new Date(this.accountForm.value.birth);
        account.email = this.accountForm.value.email;
        account.login = this.accountForm.value.login;
        account.password = this.accountForm.value.password;

        this.accountService.create(account);
        
    }

    birthdayKeyup(event) {
        
        let key = event.key;

        if (isNaN(key)) {

            let newValue: string = this.birth.value;
            this.birth.setValue(newValue.slice(0, newValue.length-1));

        } else if (this.birth.value.length == 2 || this.birth.value.length == 5)
            this.birth.setValue(this.birth.value + '/');
    }
}