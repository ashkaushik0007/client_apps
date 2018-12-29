import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { AppConfig } from '../../app.config';

@Injectable()
export class ReportsService  {

  constructor(private http: Http, private config: AppConfig) { }

  getConsolidateReports() {
      return this.http.get(this.config.apiUrl + '/reports/getConsolidateReports', this.jwt()).map((response: Response) => response.json());
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
