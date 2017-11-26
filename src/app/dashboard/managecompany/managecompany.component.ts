import { Component, OnInit, AfterViewInit, ViewChild, Injectable, Inject } from '@angular/core';


import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';

import { Router, ActivatedRoute } from '@angular/router';

import { User,Company } from './../../models/index';
import { UserService,CompanyService } from './../../services/index';


@Component({
  selector: 'app-manageuser',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.scss']
})
export class ManagecompanyComponent implements OnInit {
    public currentUser: User;
    companies: Company[] = [];
    loading = false;
    source: LocalDataSource;
    
    settings = {
      add:{
        confirmCreate: true,
      },
      edit:{
        confirmSave: true
      },
      delete:{
        confirmDelete: true
      },
      columns: {
        name: {
          title: 'Company Name'
        },
        type: {
          title: 'Bussiness Type'
        },
        email: {
          title: 'Email'
        },
        traderegnumber: {
          title: 'Trade Registration Number'
        },
        timetable: {
          title: 'Timetable'
        }
      },
  };
  
    
    constructor(private userService: UserService,
      private route: ActivatedRoute,
      private router: Router,
      private companyService:CompanyService,
    ) {
      this.source = new LocalDataSource();
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

      this.companyService.getAll().subscribe(companies => { 
        this.companies = companies; 
        this.loading = true;        
        this.source.load(companies);   
      });
    }

    ngOnInit(){
      //this.loadAllUsers();
    }

  onSaveConfirm(event):void {
    this.companyService.update(event.newData).subscribe(() => { 
        event.confirm.resolve();
    });
  }
  
  onDeleteConfirm(event): void {
    this.companyService.delete(event.data._id).subscribe(() => { 
        event.confirm.resolve();
     });
  }
}