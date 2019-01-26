import { Component, OnInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { User, Sales } from './../models/index';
import { SalesService } from './../services/index';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  public currentUser: User;
  sales: Sales[] = [];
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
        title: 'Amount Received'
      },
      dueAmount: {
        title: 'Amount Due'
      },
      total: {
        title: 'Total',
        valuePrepareFunction: (cell, row) => {
           var total = Number(row.recievedAmount) + Number(row.dueAmount);
           return total;
        }
      }
    },
  };
  
  constructor(
    private salesService:SalesService,
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

