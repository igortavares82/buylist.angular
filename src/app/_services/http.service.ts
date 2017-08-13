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

    constructor(xhr: XHRBackend, defaultOptions: HttpOptions) {
        
        super(xhr, defaultOptions);
        this.loadingHandler()
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
                    .finally(() => { this.loadingHandler(); });
    }

    post(url: string, data: any, options?: RequestOptionsArgs)  {

        return super.post(Globals.BASE_URL_SERVICE + url, data, this.requestOptions(options))
                    .do((response: Response) => {

                    }, (error: any) => {

                        this.errorHandler(error);
                    })
                    .finally(() => { this.loadingHandler(); });
    }

    private requestOptions(options?: RequestOptionsArgs) : RequestOptionsArgs {

        if (!options)
            options = new HttpOptions();
        
        if (!options.headers)
            options.headers = new Headers();

        return options;
    }

    private errorHandler(error: any) {

        if (error.status > 0) {
            
        } else {

        }
    }

    private loadingHandler() {

        if (this._loading) 
            LoadingComponent.getInstance().change();
    }
}