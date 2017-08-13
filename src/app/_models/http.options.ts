import { BaseRequestOptions } from '@angular/http'

export class HttpOptions extends BaseRequestOptions {

    constructor(custonOptions?: any) {
        
        super();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Barear ' + localStorage.getItem('token'))

        
    }
}