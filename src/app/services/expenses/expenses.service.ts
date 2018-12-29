import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../../app.config';
import { Expenses } from '../../models/index';
import { User } from '../../models/index';

@Injectable()
export class ExpensesService {

  constructor(private http: Http, private config: AppConfig) { }

  getAll(user: User) {// Based on user
    return this.http.post(this.config.apiUrl + '/expense/getAll', user, this.jwt()).map((response: Response) => response.json());
  }

  add(expense: Expenses) {
    return this.http.post(this.config.apiUrl + '/expense/add', expense, this.jwt());
  }

  update(expense: Expenses) {
    return this.http.put(this.config.apiUrl + '/expense/update', expense, this.jwt());
  }

  delete(_id: string) {
    return this.http.delete(this.config.apiUrl + '/expense/' + _id, this.jwt());
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
