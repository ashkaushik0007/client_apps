import { Component, OnInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { User, Expenses } from './../models/index';
import { ExpensesService } from './../services/index';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})

export class ExpensesComponent implements OnInit {
  public currentUser: User;
  expenses: Expenses[] = [];
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
      date: {
        title: 'Date', 
        valuePrepareFunction: (date) => {
          return new DatePipe('en-US').transform(date, 'dd/MM/yyyy');
        },     
        editable: false,
      },
      cleaning: {
        title: 'Cleaning'
      },
      coffee: {
        title: 'Coffee'
      },
      belending: {
        title: 'Belending'
      },
      loadingUnloading: {
        title: 'Loading/Unloading'
      },
      packingTailoring: {
        title: 'Packing'
      },
      plasticGunny: {
        title: 'Plastic Gunny'
      },
      ebBill: {
        title: 'E.B Bill'
      },
      salaryExpense: {
        title: 'Salary'
      },
      houseRentExpense: {
        title: 'House Rent'
      },
      moneyTransferExpense: {
        title: 'Money Transfer'
      },
      otherExpense: {
        title: 'Other'
      },
      total: {
        title: 'Total',
        valuePrepareFunction: (cell, row) => {
            var total = Number(row.otherExpense) + 
                        Number(row.moneyTransferExpense) + 
                        Number(row.houseRentExpense) + 
                        Number(row.salaryExpense) +
                        Number(row.ebBill) +
                        Number(row.plasticGunny) +
                        Number(row.packingTailoring) +
                        Number(row.loadingUnloading) +
                        Number(row.belending) +
                        Number(row.coffee) +
                        Number(row.cleaning);
           return total;
        }
      }
    },
  };
  
  constructor(
    private expensesService:ExpensesService,
  ) {
    this.source = new LocalDataSource();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(){
    this.expensesService.getAll(this.currentUser).subscribe(expenses => { 
      this.expenses = expenses; 
      this.loading = true;        
      this.source.load(expenses);   
    });
  }

  onSaveConfirm(event):void {
    this.expensesService.update(event.newData).subscribe(() => { 
        event.confirm.resolve();
    });
  }

  onDeleteConfirm(event): void {
    this.expensesService.delete(event.data._id).subscribe(() => { 
        event.confirm.resolve();
    });
  }
}