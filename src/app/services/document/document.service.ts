import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../../app.config';
import { Document } from '../../models/index';
import { User } from '../../models/index';

@Injectable()
export class DocumentService {

  constructor(private http: Http, private config: AppConfig) { }
  
     getAll(user: User) {
         return this.http.post(this.config.apiUrl + '/doc/getAll',user, this.jwt()).map((response: Response) => response.json());
     }
  
     add(document: Document) {
         return this.http.post(this.config.apiUrl + '/doc/add', document, this.jwt());
     }
 
     update(document: Document) {
         return this.http.put(this.config.apiUrl + '/doc/update', document, this.jwt());
     }
   
     delete(_id: string) {
         return this.http.delete(this.config.apiUrl + '/doc/' + _id, this.jwt());
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
