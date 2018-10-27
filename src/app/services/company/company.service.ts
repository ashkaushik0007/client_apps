import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../../app.config';
import { Company } from '../../models/index';

@Injectable()
export class CompanyService {

  constructor(private http: Http, private config: AppConfig) { }
  
     getAll() {
         return this.http.get(this.config.apiUrl + '/company/getAllCompanies', this.jwt()).map((response: Response) => response.json());
     }
  
     getById(_id: string) {
         return this.http.get(this.config.apiUrl + '/company/' + _id, this.jwt()).map((response: Response) => response.json());
     }
  
     create(company: Company) {
         return this.http.post(this.config.apiUrl + '/company/register', company, this.jwt());
     }
 
     update(company: Company) {
         return this.http.put(this.config.apiUrl + '/company/update', company, this.jwt());
     }
   
     delete(_id: string) {
         return this.http.delete(this.config.apiUrl + '/company/' + _id, this.jwt());
     }
  
     // private helper methods
     private jwt() {
         // create authorization header with jwt token
         let currentUser = JSON.parse(localStorage.getItem('currentUser'));
         if (currentUser && currentUser.token) {
             let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
             return new RequestOptions({ headers: headers });
         }
     }
}
