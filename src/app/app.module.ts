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
import { AlertService, AuthenticationService, UserService, DocumentService, PurchaseService, SalesService, ExpensesService, ReportsService} from './services/index';
import { AlertComponent } from './directives/index';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/index';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SelfregisterComponent } from './selfregister/selfregister.component';
import { HeaderComponent, SidebarComponent, TableDatepickerComponent, TableDatepickerRenderComponent } from './shared/index';
import { NgDatepickerModule } from 'ng2-datepicker';
import { AddPurchaseComponent, PurchaseComponent } from './purchase/index';
import { SalesComponent,AddSaleComponent } from './sales/index';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddExpenseComponent } from './expenses/add-expense/add-expense.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    AlertComponent,
    SelfregisterComponent,
    HeaderComponent,
    SidebarComponent,
    PurchaseComponent,
    AddPurchaseComponent,
    SalesComponent,
    AddSaleComponent,
    ExpensesComponent,
    AddExpenseComponent,
    TableDatepickerComponent,
    TableDatepickerRenderComponent,
    HomeComponent
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
    NgDatepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ], 
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    DocumentService,
    PurchaseService,
    SalesService,
    ExpensesService,
    ReportsService,
    AppConfig,
    {provide: APP_BASE_HREF, useValue : '/'} 
  ],  
  bootstrap: [AppComponent],
  entryComponents: [TableDatepickerRenderComponent, TableDatepickerComponent]
})
export class AppModule { }
