
export interface Document {
  _id: string;
  name: string;
  type: string;
  number: string; // String of Pan Card and other type of document having AlphaNumeric Value
  vehicleCategory: string;  
  dob: string;
  fatherName: string;
  owner:string;
  created: Date;
  updated: Date;
}