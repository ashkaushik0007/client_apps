import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

import { Router, ActivatedRoute } from '@angular/router';

import { User } from './../models/index';
import { UserService, ReportsService } from './../services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currentUser: User;
  loading = false;
  source: LocalDataSource;
  
  settings = {
    actions: false,
    columns: {
      _id: {
        title: 'Month',
        valuePrepareFunction: (value) => {          
          switch(value){
            case 1:
              return 'January';
            case 2:
              return 'Febuary';
            case 3:
              return 'March';
            case 4:
              return 'April';
            case 5:
              return 'May';
            case 6:
              return 'June';
            case 7:
              return 'July';
            case 8:
              return 'August';
            case 9:
              return 'September';
            case 10:
              return 'October';
            case 11:              
              return 'November';
            case 12:
              return 'December';
            default:
              return '';
          }
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              {value: '1', title:'January'},
              {value: '2', title:'Febuary'},
              {value: '3', title:'March'},
              {value: '4', title:'April'},
              {value: '5', title:'May'},
              {value: '6', title:'June'},
              {value: '7', title:'July'},
              {value: '8', title:'August'},
              {value: '9', title:'September'},
              {value: '10', title:'October'},
              {value: '11', title:'November'},
              {value: '12', title:'December'},
            ],
          },
        },
      },
      salesTotal: {
        title: 'Sales Total'
      },
      purchasesTotal: {
        title: 'Purchases Total'
      },
      expensesTotal: {
        title: 'Expenses Total'
      }
    },
  };
  
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private reportService:ReportsService,
  ) {
    this.source = new LocalDataSource();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));   
  }

  ngOnInit(){
    this.reportService.getConsolidateReports().subscribe(reports => { 
      this.loading = true;        
      this.source.load(reports);   
    });
  }
}

