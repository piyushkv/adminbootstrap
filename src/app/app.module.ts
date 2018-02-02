import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { HttpModule, Http, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule,
          TypeaheadModule,
          AlertModule  } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './shared/admin-header/admin-header.component';
import { AdminNavComponent } from './shared/admin-nav/admin-nav.component';
import { LoginComponent } from './routes/login/login.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { ForgotComponent } from './routes/forgot/forgot.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { FormsComponent } from './routes/forms/forms.component';
import { TableComponent } from './routes/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminNavComponent,
    LoginComponent,
    DashboardComponent,
    ForgotComponent,
    ProfileComponent,
    FormsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    AlertModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
