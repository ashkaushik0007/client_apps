import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

import { AppConfig } from './app.config';

import {APP_BASE_HREF} from '@angular/common';

import { AuthGuard } from './guards/index';
import { AlertService, AuthenticationService, UserService} from './services/index';
import { AlertComponent } from './directives/index';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/shared/sidebar/sidebar.component';
import { NavComponent } from './dashboard/shared/nav/nav.component';
import { ManageuserComponent } from './dashboard/manageuser/manageuser.component';
import { AddsuperuserComponent } from './dashboard/manageuser/addsuperuser/addsuperuser.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ManagecompanyComponent } from './dashboard/managecompany/managecompany.component';
import { AddcompanyComponent } from './dashboard/managecompany/addcompany/addcompany.component';
import { CompanyService } from 'app/services/company/company.service';
import { SelfregisterComponent } from './selfregister/selfregister.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    NavComponent,
    ManageuserComponent,
    AddsuperuserComponent,
    ManagecompanyComponent,
    AddcompanyComponent,
    SelfregisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    Ng2SmartTableModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    CompanyService,
    AppConfig,
    {provide: APP_BASE_HREF, useValue : '/'} 
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
