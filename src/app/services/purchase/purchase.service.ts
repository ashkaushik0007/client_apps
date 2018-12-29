import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../../app.config';
import { Purchase } from '../../models/index';
import { User } from '../../models/index';

@Injectable()
export class PurchaseService {

  constructor(private http: Http, private config: AppConfig) { }

  getAll(user: User) {// Based on user
    return this.http.post(this.config.apiUrl + '/purchase/getAll', user, this.jwt()).map((response: Response) => response.json());
  }

  add(purchase: Purchase) {
    return this.http.post(this.config.apiUrl + '/purchase/add', purchase, this.jwt());
  }

  update(purchase: Purchase) {
    return this.http.put(this.config.apiUrl + '/purchase/update', purchase, this.jwt());
  }

  delete(_id: string) {
    return this.http.delete(this.config.apiUrl + '/purchase/' + _id, this.jwt());
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
