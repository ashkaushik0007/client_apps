import { DecimalPipe } from "@angular/common";

export interface Sales {
  _id: string;
  auctionName: string;
  dealerName: string;
  date: string;
  billNo: number;
  qty: number;  
  recievedAmount: number;
  totalAmount: number;
  owner:string;
  created: Date;
  updated: Date;
}