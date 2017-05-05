import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { URLSearchParams } from "@angular/http"
import { Globals } from '../app.globals';
import { Account } from '../_models/account';

@Injectable()
export class AccountService {

    constructor (private http: Http) { }

    getAccounts() : Account[] {

        let accounts: Account[] = [];

        this.http.get(Globals.BASE_URL_SERVICE + 'account/all/').map((response: Response) => {

            console.log(response.json());
        });

        return accounts;
    }
}