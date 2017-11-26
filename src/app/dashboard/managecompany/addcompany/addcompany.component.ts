import { OnInit, Component, Input, Output } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';


import { FormControl, FormGroup, Validators } from '@angular/forms';
 
import { AlertService,  AuthenticationService} from './../../../services/index';
import { UserService, CompanyService } from './../../../services/index';
import { User, Company } from './../../../models/index';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.scss']
})
export class AddcompanyComponent implements OnInit {
  currentUser: User;
  company: FormGroup;
  loading = false;
  returnUrl: string;
  constructor(
      private router: Router,
      private userService: UserService,
      private alertService: AlertService,
      private companyService: CompanyService) { 
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      }

  ngOnInit() {
    this.company = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      type: new FormControl('', [Validators.required, Validators.minLength(3)]),        
      email: new FormControl('', [
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ]),
      traderegnumber: new FormControl('', [Validators.required, Validators.minLength(3)]),
      address: new FormControl('', [Validators.required, Validators.minLength(3)]),
      ownername: new FormControl('', [Validators.required, Validators.minLength(3)]),
      ownersurname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      ownerphone: new FormControl('',[
        Validators.required,
        Validators.pattern("^(0|[1-9][0-9]*)$")
      ]),      
      ownedBy: new FormControl(this.currentUser._id),
      timetable: new FormControl('red',Validators.required),
      active: new FormControl(true),     
      ownerpass: new FormControl('Admin@123'),
      created: new FormControl(Date.now()),
      updated: new FormControl(Date.now())
    });
  }
  onSubmit({ value, valid }: { value: Company, valid: boolean }) {

   if(valid){
      this.loading = true;
          this.companyService.create(value)
              .subscribe(
              data => {
                  this.loading = false;
                  this.alertService.success('New company added successfully, Thank you', true);
              },
              error => {
                  this.alertService.error(error._body);
                  this.loading = false;
              });
      }
  }
}
