import { Component, OnInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { User, Sales, Reports } from './../models/index';
import { SalesService, ReportsService } from './../services/index';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  public currentUser: User;
  sales: Sales[] = [];
  loading = false;
  report: Reports;
  source: LocalDataSource;
  qty:DecimalPipe;
  totaldue: DecimalPipe;
  
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
      auctionName: {
        title: 'Auction Name'
      },
      dealerName: {
        title: 'Dealer Name'
      },
      date: {
        title: 'Date',
        valuePrepareFunction: (date) => {
          return new DatePipe('en-US').transform(date, 'dd/MM/yyyy');
        },
        editable: false,
      },
      billNo:{
        title : 'Bill Number'
      },
      qty: {
        title: 'Quantity'
      },
      recievedAmount: {
        title: 'Received Amount'
      },
      totalAmount: {
        title: 'Total Amount'
      },      
      dueAmount: {
        title: 'Due Amount',
        valuePrepareFunction: (cell, row) => {
          var due = Number(row.totalAmount) - Number(row.recievedAmount);
          return due;
        }
      }
    },
  };
  
  constructor(
    private salesService:SalesService,
    private reportService:ReportsService,
  ){
    this.source = new LocalDataSource();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));  
  }

  ngOnInit(){
    this.salesService.getAll(this.currentUser).subscribe(sales => { 
      this.sales = sales; 
      this.loading = true;        
      this.source.load(sales);   
    });

    this.reportService.getSalesDuereports().subscribe(duereport => { 
      this.report = duereport[0]; 
      this.qty = this.report.totalQty;
      this.totaldue = this.report.totalDue;
    });
  }

  onSaveConfirm(event):void {
    this.salesService.update(event.newData).subscribe(() => { 
        event.confirm.resolve();
    });
  }

  onDeleteConfirm(event): void {
    this.salesService.delete(event.data._id).subscribe(() => { 
        event.confirm.resolve();
    });
  }
}

