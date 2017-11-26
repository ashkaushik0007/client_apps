import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, ManageuserComponent,AddsuperuserComponent,AddcompanyComponent,ManagecompanyComponent } from './dashboard/index';
import { DashboardComponent } from './dashboard/index';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './guards/index';
import { LoginComponent } from './login/login.component';

// ,canActivate: [AuthGuard],
const routes: Routes =[
    { path: 'dashboard',        component: DashboardComponent,
      children: [
        { path: '', component: HomeComponent, outlet: 'page'},
        { path: 'profile', component: SignupComponent, outlet: 'page'},
        { path: 'signup', component: SignupComponent, outlet: 'page'},
        { path: 'manageuser', component:ManageuserComponent, outlet:'page'},        
        { path: 'addsuperuser', component:AddsuperuserComponent, outlet:'page'},
        { path: 'addcompany', component:AddcompanyComponent, outlet:'page'},
        { path: 'companies', component:ManagecompanyComponent, outlet:'page'}
      ],canActivate: [AuthGuard]},
    { path: 'login',            component: LoginComponent },
    { path: 'signup',           component: SignupComponent },
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
