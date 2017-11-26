import { OnInit, Component, Input, Output } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';


import { FormControl, FormGroup, Validators } from '@angular/forms';
 
import { AlertService,  AuthenticationService} from '../services/index';
import { UserService } from '../services/index';
import { User } from '../models/index';
 
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
 
export class SignupComponent implements OnInit {
    user: FormGroup;
    loading = false;
    returnUrl: string;
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
      this.user = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        surname: new FormControl('', [Validators.required, Validators.minLength(3)]),        
        email: new FormControl('', [
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
          ]),
        account: new FormGroup({
          address: new FormControl('', Validators.required),
          phone: new FormControl('',Validators.required),
          whatsapp: new FormControl('',Validators.required),
          role: new FormControl('superuser', [
            Validators.required,
            Validators.minLength(2)
          ]),
          invitedBy: new FormControl('superuser'),
          assignedColor: new FormControl('red',Validators.required),
          workingHour: new FormControl('10',Validators.required),
          vacation: new FormControl('10',Validators.required),
        }),        
        password: new FormControl('Admin@123'),
        created: new FormControl(Date.now()),
        updated: new FormControl(Date.now())
      });
    }
    onSubmit({ value, valid }: { value: User, valid: boolean }) {
     if(valid){
        this.loading = true;
            this.userService.create(value)
                .subscribe(
                data => {
                    this.loading = false;
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
        }
    }
}