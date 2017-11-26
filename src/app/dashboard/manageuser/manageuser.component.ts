import { Component, OnInit, AfterViewInit, ViewChild, Injectable, Inject } from '@angular/core';


import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';

import { Router, ActivatedRoute } from '@angular/router';

import { User } from './../../models/index';
import { UserService } from './../../services/index';


@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss']
})
export class ManageuserComponent implements OnInit {
    public currentUser: User;
    users: User[] = [];
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
          title: 'Full Name'
        },
        surname: {
          title: 'Last Name'
        },
        email: {
          title: 'Email'
        },
        address: {
          title: 'Address'
        },
        whatsapp: {
          title: 'Whatsapp'
        }
      },
  };
  
    
    constructor(private userService: UserService,
      private route: ActivatedRoute,
      private router: Router
    ) {
      this.source = new LocalDataSource();
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

      this.userService.getAll().subscribe(users => { 
        this.users = users; 
        this.loading = true;        
        this.source.load(users);   
      });
    }

    ngOnInit(){
      //this.loadAllUsers();
    }

  onSaveConfirm(event):void {
    this.userService.update(event.newData).subscribe(() => { 
        event.confirm.resolve();
    });
  }
  
  onDeleteConfirm(event): void {
    this.userService.delete(event.data._id).subscribe(() => { 
        event.confirm.resolve();
     });
  }
}