export interface Company {
  _id: string;
  name: string;
  type: string;
  email: string;
  traderegnumber: string;  
  ownername: string;
  ownersurname: string;
  ownerphone: number;
  ownedBy: string;
  ownerpass:string;
  timetable: string;
  active: boolean;
  created: Date;
  updated: Date;
}