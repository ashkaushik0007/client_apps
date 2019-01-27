import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { PurchaseComponent, AddPurchaseComponent } from './purchase/index';
import { SalesComponent,AddSaleComponent } from './sales/index';
import { ExpensesComponent,AddExpenseComponent } from './expenses/index';
import { AuthGuard } from './guards/index';
import { LoginComponent } from './login/login.component';
import { SelfregisterComponent } from './selfregister/selfregister.component';

const routes: Routes =[
    { path: 'dashboard', component: HomeComponent,canActivate: [AuthGuard]},    
    { path: 'manage-purchases',component: PurchaseComponent, canActivate: [AuthGuard]},
    { path: 'add-purchase',component: AddPurchaseComponent, canActivate: [AuthGuard]}, 
    { path: 'manage-sales',component: SalesComponent, canActivate: [AuthGuard]},  
    { path: 'add-sales',component: AddSaleComponent, canActivate: [AuthGuard]}, 
    { path: 'manage-expenses',component: ExpensesComponent, canActivate: [AuthGuard]},  
    { path: 'add-expenses',component: AddExpenseComponent, canActivate: [AuthGuard]}, 
    { path: 'signup', component: SelfregisterComponent},
    { path: 'login',  component: LoginComponent},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
