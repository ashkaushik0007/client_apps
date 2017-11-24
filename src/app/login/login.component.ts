import { OnInit, Component, Input, Output } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';


import { FormControl, FormGroup, Validators } from '@angular/forms';
 
import { AlertService,  AuthenticationService} from '../services/index';
import { UserService } from '../services/index';
import { User } from '../models/index';
 
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
})
 
export class LoginComponent implements OnInit {
    user: FormGroup;
    loading = false;
    returnUrl: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
      this.user = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        account: new FormGroup({
          email: new FormControl('', [
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
          ]),
          confirm: new FormControl('', [
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
          ])
        })
      });
    }
    onSubmit({ value, valid }: { value: User, valid: boolean }) {
     this.loading = true;
     if(valid){
        this.authenticationService.login(value.email, value.email)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
            });
     }
    }
}