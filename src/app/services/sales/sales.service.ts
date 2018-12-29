import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../../app.config';
import { Sales } from '../../models/index';
import { User } from '../../models/index';

@Injectable()
export class SalesService {

  constructor(private http: Http, private config: AppConfig) { }

  getAll(user: User) {// Based on user
    return this.http.post(this.config.apiUrl + '/sale/getAll', user, this.jwt()).map((response: Response) => response.json());
  }

  add(sale: Sales) {
    return this.http.post(this.config.apiUrl + '/sale/add', sale, this.jwt());
  }

  update(sale: Sales) {
    return this.http.put(this.config.apiUrl + '/sale/update', sale, this.jwt());
  }

  delete(_id: string) {
    return this.http.delete(this.config.apiUrl + '/sale/' + _id, this.jwt());
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
