
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';

 
import { AppConfig } from '../../app.config';
 
@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: AppConfig) { }
 
    login(email: string, password: string) {
        return this.http.post(this.config.apiUrl + '/user/authenticate', { email: email, password: password }).pipe(
            map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            }));
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}