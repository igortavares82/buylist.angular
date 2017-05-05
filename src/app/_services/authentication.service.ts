import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { URLSearchParams } from "@angular/http"
import { Globals } from '../app.globals';

@Injectable()
export class AuthenticationService {

    public token: string;

    constructor (private http: Http) {
        
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login (username: string, password: string) : Observable<boolean> {

        let data = new URLSearchParams();

        data.append('username', username);
        data.append('password', password);

        return this.http.post(Globals.BASE_URL_SERVICE + 'account/auth/', data).map((response: Response) => { 

            let resp = response.json();

            if (resp.success) {

                this.token = resp.token;
                localStorage.setItem('currentUser', JSON.stringify(resp.account[0]));
                localStorage.setItem('token', this.token);
                
                return true;

            } else {

                return false;
            }
        });
    };

    logout() {

        this.token = null;
        localStorage.removeItem('currentUser');
    }
}