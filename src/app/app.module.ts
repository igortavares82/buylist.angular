/* core components */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { routing, appRoutingProviders } from './_route/route';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/* bootstrap components */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* plugin modal */
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

/* project components */
import { AuthGuard } from './_auth/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { AccountService } from './_services/account.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountCreateComponent } from './account/account.create.component';
import { AccountComponent } from './account/account.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HttpService } from './_services/http.service';
import { HttpOptions } from './_models/http.options';
import { httpServiceFactory } from './_factories/request.options.factory';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    MenuComponent,
    AccountCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    NgbModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    CommonModule
  ],
  providers: [
    appRoutingProviders,
    AuthGuard,
    AuthenticationService,
    AccountService,
    {
        provide: HttpService,
        useFactory: httpServiceFactory,
        deps: [XHRBackend, RequestOptions]    
    }
  ],
  bootstrap: [AppComponent],
  entryComponents:[AccountCreateComponent]
})
export class AppModule { }
