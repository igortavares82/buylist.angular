import { Injectable } from '@angular/core';
import {
    Http,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Request,
    Headers,
    XHRBackend
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { HttpOptions } from '../_models/http.options';
import { Globals } from '../app.globals';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { LoadingComponent } from '../shared/loading/loading.component'
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Injectable()
export class HttpService extends Http {

    private _loading: boolean = true;
    private _modal: Modal;

    constructor(xhr: XHRBackend, defaultOptions: HttpOptions, public modal: Modal) {
        
        super(xhr, defaultOptions);
        this.loadingHandler(true);
        this._modal = modal;
    }

    loading(value: boolean) : this {

        this._loading = value;
        return this;
    }

    get(url: string, options?: RequestOptionsArgs) : Observable<any> {

        return super.get(Globals.BASE_URL_SERVICE + url, this.requestOptions(options))
                    .do((response: Response) => {

                    }, (error: any) => {
                        
                        this.errorHandler(error);
                    })
                    .finally(() => { this.loadingHandler(false); });
    }

    post(url: string, data: any, options?: RequestOptionsArgs)  {

        return super.post(Globals.BASE_URL_SERVICE + url, data, this.requestOptions(options))
                    .do((response: Response) => {

                    }, (error: any) => {

                        this.errorHandler(error);
                    })
                    .finally(() => { this.loadingHandler(false); });
    }

    private requestOptions(options?: RequestOptionsArgs) : RequestOptionsArgs {

        if (!options)
            options = new HttpOptions();
        
        if (!options.headers)
            options.headers = new Headers();

        return options;
    }

    private errorHandler(error: any) {

        let title: string;
        let body: string;

        if (error.status == 0) {

            title = 'Http error';
            body = 'An error ocurred on your connection!';

        } else {
            
            title = `Http ${error.status} error`;
            body = error.statusText;
        }
        
        this._modal
            .alert()
            .title(title)
            .body(body)
            .open();
    }

    private loadingHandler(value: boolean) {

        console.log(this._loading);

        if (this._loading) 
            LoadingComponent.instance.change(value);
    }
}