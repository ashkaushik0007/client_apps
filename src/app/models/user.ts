export interface User {
  _id: string;
  name: string;
  surname: string;
  email: string;
  address: string;
  phone: number;
  whatsapp: number;
  role: string;
  invitedBy: string;
  assignedColor: string;
  workingHour: string;
  vacation: string;
  password: string;
  active: boolean;
  created: Date;
  updated: Date;
}