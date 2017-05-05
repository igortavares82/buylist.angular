import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './_route/route';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from './_auth/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { AccountService } from './_services/account.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [
    appRoutingProviders,
    AuthGuard,
    AuthenticationService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
