import { DecimalPipe } from "@angular/common";

export interface Expenses {
  _id: string;
  date: string;
  cleaning: DecimalPipe;
  coffee: DecimalPipe;
  belending: DecimalPipe;
  loadingUnloading: DecimalPipe;  
  packingTailoring: DecimalPipe;
  plasticGunny: DecimalPipe;
  ebBill: DecimalPipe;
  salaryExpense: DecimalPipe;
  houseRentExpense: DecimalPipe;
  moneyTransferExpense: DecimalPipe;
  otherExpense: DecimalPipe;
  owner:string;
  created: Date;
  updated: Date;
}