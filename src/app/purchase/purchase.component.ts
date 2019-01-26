import { Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, ActivatedRoute } from '@angular/router';
import { User, Purchase} from './../models/index';
import { UserService, PurchaseService } from './../services/index';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  public currentUser: User;
  purchase: Purchase[] = [];
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
        title: 'Amount Spent'
      },
      dueAmount: {
        title: 'Amount Due'
      },
      total: {
        title: 'Total',
        valuePrepareFunction: (cell, row) => {
           var total = Number(row.costAmount) + Number(row.dueAmount);
           return total;
        }
      }
    },
  };
  
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private purchaseService:PurchaseService,
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
    //this.loadAllUsers();
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

