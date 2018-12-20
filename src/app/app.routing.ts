import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ManagedocumentComponent, AddDocumentComponent } from './managedocument/index';
import { AuthGuard } from './guards/index';
import { LoginComponent } from './login/login.component';
import { SelfregisterComponent } from './selfregister/selfregister.component';

// ,canActivate: [AuthGuard],
const routes: Routes =[
    { path: 'dashboard', component: ManagedocumentComponent,canActivate: [AuthGuard]},
    { path: 'login',  component: LoginComponent },
    { path: 'signup', component: SelfregisterComponent },
    { path: 'add-document', component: AddDocumentComponent },
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
