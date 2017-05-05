import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AccountComponent } from '../account/account.component';
import { AuthGuard } from '../_auth/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'account', component: AccountComponent,  canActivate: [AuthGuard] }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(routes);