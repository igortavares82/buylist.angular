import { BaseRequestOptions } from '@angular/http'

export class HttpOptions extends BaseRequestOptions {

    loading: boolean = true;

    constructor(custonOptions?: any) {
        
        super();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Barear ' + localStorage.getItem('token'))

        if (custonOptions && custonOptions.loading)
            this.loading = custonOptions.loading as boolean;
    }
}