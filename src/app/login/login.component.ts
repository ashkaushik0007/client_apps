import { OnInit, Component, Input, Output } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
 
import { AlertService,  AuthenticationService} from '../services/index';
import { UserService } from '../services/index';
import { User } from '../models/index';


 
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
})
 
export class LoginComponent implements OnInit {
    test : Date = new Date();

    constructor() { }

    ngOnInit() {}
}