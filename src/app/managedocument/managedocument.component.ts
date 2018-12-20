import { Component, OnInit, AfterViewInit, ViewChild, Injectable, Inject } from '@angular/core';


import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';

import { Router, ActivatedRoute } from '@angular/router';

import { User, Document } from './../models/index';
import { UserService,DocumentService } from './../services/index';

@Component({
  selector: 'app-managedocument',
  templateUrl: './managedocument.component.html',
  styleUrls: ['./managedocument.component.scss']
})
export class ManagedocumentComponent implements OnInit {
  public currentUser: User;
  documents: Document[] = [];
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
        title: 'Document Name'
      },
      type: {
        title: 'Document Type'
      },
      number: {
        title: 'Document Number'
      },
      vehicleCategory: {
        title: 'Vehicle Category'
      },
      dob: {
        title: 'Birth Date'
      },
      fatherName: {
        title: 'Father Name'
      }
    },
};

  
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private documentService:DocumentService,
  ) {
    this.source = new LocalDataSource();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    this.documentService.getAll(this.currentUser).subscribe(documents => { 
      this.documents = documents; 
      this.loading = true;        
      this.source.load(documents);   
    });
  }

  ngOnInit(){
    //this.loadAllUsers();
  }

  onSaveConfirm(event):void {
    this.documentService.update(event.newData).subscribe(() => { 
        event.confirm.resolve();
    });
  }

  onDeleteConfirm(event): void {
    this.documentService.delete(event.data._id).subscribe(() => { 
        event.confirm.resolve();
    });
  }
}
