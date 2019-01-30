import { OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from './../../services/index';
import { PurchaseService } from './../../services/index';
import { User, Purchase } from './../../models/index';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.scss']
})
export class AddPurchaseComponent implements OnInit {
  currentUser: User;
  purchaseForm: FormGroup;
  loading = false;
  returnUrl: string;
 
  options: DatepickerOptions = {
    minYear: 1900,
    maxYear: 2030,    
    displayFormat: 'DD/MM/YYYY',
    barTitleFormat: 'DD/MM/YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    barTitleIfEmpty: 'Click to select a date',
    placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
    addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
    addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
    fieldId: 'date', // ID to assign to the input field. Defaults to datepicker-<counter>
    useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
  };

  constructor(
    private alertService: AlertService,
    private router: Router,
    private purchaseService: PurchaseService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  
  ngOnInit() {
    this.purchaseForm = new FormGroup({
      auctionName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      companyName: new FormControl('', [Validators.required, Validators.minLength(3)]),     
      date: new FormControl(''),
      invoiceNo: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      qty: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,3})?$/)]),
      costAmount: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,3})?$/)]),
      totalAmount: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,3})?$/)]),
      owner: new FormControl(this.currentUser._id),
      created: new FormControl(Date.now()),
      updated: new FormControl(Date.now())
    }); 
  }

  onSubmit({ value, valid }: { value: Purchase, valid: boolean }) {

    var DateString = '';

    if(typeof value.date.toLocaleString() !== 'undefined'){
      var stringDate = value.date.toLocaleString().split(',');
      
      if(typeof stringDate[0] !== 'undefined'){
        DateString = stringDate[0];
      }
    }

    value.date = DateString;
    
    if (valid) {
      this.loading = true;
      this.purchaseService.add(value)
          .subscribe(
            data => {
              this.loading = false;
              this.alertService.success('New purchase added successfully, Thank you', true);
              this.router.navigate(['/manage-purchases']);
            },
            error => {
              this.alertService.error(error._body);
              this.loading = false;
            });
    }
  }
}


