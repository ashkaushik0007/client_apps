import { Component, OnInit} from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { LocalDataSource } from 'ng2-smart-table';
import { User, Purchase, Reports } from './../models/index';
import { PurchaseService, ReportsService } from './../services/index';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  public currentUser: User;
  purchase: Purchase[] = [];
  report: Reports;
  loading = false;
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
      companyName: {
        title: 'Company Name'
      },
      date: {
        title: 'Date', 
        valuePrepareFunction: (date) => {
          return new DatePipe('en-US').transform(date, 'dd/MM/yyyy');
        },     
        editable: false
      },
      invoiceNo:{
        title : 'Invoice Number'
      },
      qty: {
        title: 'Quantity'
      },
      costAmount: {
        title: 'Spent Amount'
      }, 
      totalAmount: {
        title: 'Total Amount'
      },    
      dueAmount: {
        title: 'Due Amount',
        valuePrepareFunction: (cell, row) => {
           var due = Number(row.totalAmount) - Number(row.costAmount);
           return due;
        }
      }
    },
  };
  
  constructor(
    private purchaseService:PurchaseService,
    private reportService:ReportsService,
  ) {
    this.source = new LocalDataSource();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    this.purchaseService.getAll(this.currentUser).subscribe(purchase => { 
      this.purchase = purchase; 
      this.loading = true;        
      this.source.load(purchase);   
    });
  }

  ngOnInit(){

    this.reportService.getpurchaseReports().subscribe(duereport => { 
      this.report = duereport[0]; 
      this.qty = this.report.totalQty;
      this.totaldue = this.report.totalDue;
    });
  }

  onSaveConfirm(event):void {
    this.purchaseService.update(event.newData).subscribe(() => { 
        event.confirm.resolve();
    });
  }

  onDeleteConfirm(event): void {
    this.purchaseService.delete(event.data._id).subscribe(() => { 
        event.confirm.resolve();
    });
  }
}

