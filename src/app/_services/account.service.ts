import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { URLSearchParams } from "@angular/http"
import { Globals } from '../app.globals';
import { Account } from '../_models/account';
import { HttpService } from './http.service';

@Injectable()
export class AccountService {

    constructor (private http: HttpService) { }

    get() : Account[] {

        let accounts: Account[] = [];

        this.http
            .get('account/alll/')
            .subscribe((response: Response) => {
                
                (response.json() as any[]).forEach(x => {

                     let account: Account = new Account();

                     account.id = x._id;
                     account.name = x.name;
                     account.birth = new Date(x.birth);
                     account.email = x.email;

                     accounts.push(account);
                });
            });

        return accounts;
    }

    create(account: Account) {

        this.http
            .post(Globals.BASE_URL_SERVICE + '/account/create/', account)
            .subscribe((response: Response) => {
                
            })
    }
}