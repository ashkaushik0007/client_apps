import { OnInit, Component, Input, Output } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';


import { FormControl, FormGroup, Validators } from '@angular/forms';
 
import { AlertService,  AuthenticationService} from '../services/index';
import { UserService } from '../services/index';
import { User } from '../models/index';

@Component({
  selector: 'app-selfregister',
  templateUrl: './selfregister.component.html',
  styleUrls: ['./selfregister.component.scss']
})
export class SelfregisterComponent implements OnInit {
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
        email: new FormControl('', [
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
          ]),
        phone: new FormControl('',Validators.required),
        role: new FormControl('Document Owner'), 
        password: new FormControl(''),
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