import { DecimalPipe } from "@angular/common";

export interface Purchase {
  _id: string;
  auctionName: string;
  companyName: string;
  date: string;
  qty: number;  
  costAmount: DecimalPipe;
  dueAmount: DecimalPipe;
  owner:string;
  created: Date;
  updated: Date;
}