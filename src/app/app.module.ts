import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { ChartsModule } from 'ng2-charts';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule,
          TypeaheadModule,
          AlertModule,
          TabsModule   } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './shared/admin-header/admin-header.component';
import { AdminNavComponent } from './shared/admin-nav/admin-nav.component';
import { LoginComponent } from './routes/login/login.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { ForgotComponent } from './routes/forgot/forgot.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { FormsComponent } from './routes/forms/forms.component';
import { TableComponent } from './routes/table/table.component';
import { AdduserComponent } from './routes/adduser/adduser.component';


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
    TableComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
