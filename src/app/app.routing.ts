import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { AppComponent } from './app.component';
import { LoginComponent } from './routes/login/login.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { ForgotComponent } from './routes/forgot/forgot.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { FormsComponent } from './routes/forms/forms.component';
import { TableComponent } from './routes/table/table.component';
import { AdduserComponent } from './routes/adduser/adduser.component';

const APP_ROUTES : Routes = [
	{ path: '', component: LoginComponent},
	{ path: 'dashboard', component: DashboardComponent},
	{ path: 'form', component: FormsComponent},
	{ path: 'tables', component: TableComponent},
	{ path: 'profile', component: ProfileComponent},
	{ path: 'forgot-password', component: ForgotComponent},
	{ path: 'add-user', component: AdduserComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);