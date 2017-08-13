import { XHRBackend } from '@angular/http';
import { HttpOptions } from '../_models/http.options';
import { HttpService } from '../_services/http.service';

function httpServiceFactory(backend: XHRBackend, options: HttpOptions) {

    console.log(123)
    return new HttpService(backend, options);
}

export { httpServiceFactory };