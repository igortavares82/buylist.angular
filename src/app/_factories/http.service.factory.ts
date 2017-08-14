import { XHRBackend } from '@angular/http';
import { HttpOptions } from '../_models/http.options';
import { HttpService } from '../_services/http.service';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

function httpServiceFactory(backend: XHRBackend, options: HttpOptions,  modal: Modal) {
    return new HttpService(backend, options, modal);
}

export { httpServiceFactory };