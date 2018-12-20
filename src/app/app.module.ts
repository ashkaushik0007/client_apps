import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { AppConfig } from './app.config';

import {APP_BASE_HREF} from '@angular/common';

import { AuthGuard } from './guards/index';
import { AlertService, AuthenticationService, UserService, DocumentService} from './services/index';
import { AlertComponent } from './directives/index';
import { LoginComponent } from './login/login.component';
import { ManagedocumentComponent, AddDocumentComponent } from './managedocument/index';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SelfregisterComponent } from './selfregister/selfregister.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NgDatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    SelfregisterComponent,
    HeaderComponent,
    SidebarComponent,
    ManagedocumentComponent,
    AddDocumentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    Ng2SmartTableModule,    
    NgDatepickerModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    DocumentService,
    AppConfig,
    {provide: APP_BASE_HREF, useValue : '/'} 
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
