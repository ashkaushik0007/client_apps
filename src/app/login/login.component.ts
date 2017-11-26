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
      // reset login status
      this.authenticationService.logout();      

      this.user = new FormGroup({
        email: new FormControl('', [
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ]),
        password: new FormControl('', Validators.required)
      });
    }
    onSubmit({ value, valid }: { value: User, valid: boolean }) {
     this.loading = true;
     if(valid){
        this.authenticationService.login(value.email, value.password)
            .subscribe(
                data => {
                    //this.router.navigate([this.returnUrl]);
                    this.loading = false;
                    this.alertService.success('Loggined Successfull', true);
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
            });
     }
    }
}