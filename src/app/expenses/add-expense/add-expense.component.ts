import { OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from './../../services/index';
import { ExpensesService } from './../../services/index';
import { User, Expenses } from './../../models/index';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  currentUser: User;
  expensesForm: FormGroup;
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
    private expensesService: ExpensesService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
   
  ngOnInit() {
    this.expensesForm = new FormGroup({         
      date: new FormControl(''),
      cleaning: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      coffee: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      belending: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      loadingUnloading: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      packingTailoring: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      plasticGunny: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      ebBill: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      salaryExpense: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      houseRentExpense: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      moneyTransferExpense: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      otherExpense: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      owner: new FormControl(this.currentUser._id),
      created: new FormControl(Date.now()),
      updated: new FormControl(Date.now())
    }); 
  }

  onSubmit({ value, valid }: { value: Expenses, valid: boolean }) {

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
      this.expensesService.add(value)
          .subscribe(
            data => {
              this.loading = false;
              this.alertService.success('New expense added successfully, Thank you', true);
              this.router.navigate(['/manage-expenses']);
            },
            error => {
              this.alertService.error(error._body);
              this.loading = false;
            });
    }
  }
}



