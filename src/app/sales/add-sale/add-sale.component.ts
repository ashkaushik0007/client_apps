import { OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from './../../services/index';
import { SalesService } from './../../services/index';
import { User, Sales } from './../../models/index';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.scss']
})
export class AddSaleComponent implements OnInit {

  currentUser: User;
  salesForm: FormGroup;
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
    private salesService: SalesService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  
  ngOnInit() {
    this.salesForm = new FormGroup({
      auctionName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dealerName: new FormControl('', [Validators.required, Validators.minLength(3)]),     
      date: new FormControl(''),
      billNo: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      qty: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,3})?$/)]),
      recievedAmount: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,3})?$/)]),
      dueAmount: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,3})?$/)]),
      owner: new FormControl(this.currentUser._id),
      created: new FormControl(Date.now()),
      updated: new FormControl(Date.now())
    }); 
  }

  onSubmit({ value, valid }: { value: Sales, valid: boolean }) {  
    
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
      this.salesService.add(value)
          .subscribe(
            data => {
              this.loading = false;
              this.alertService.success('New sales added successfully, Thank you', true);
              this.router.navigate(['/manage-sales']);
            },
            error => {
              this.alertService.error(error._body);
              this.loading = false;
            });
    }
  }
}


