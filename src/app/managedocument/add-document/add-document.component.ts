import { OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from './../../services/index';
import {  DocumentService } from './../../services/index';
import { User, Document } from './../../models/index';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {
  currentUser: User;
  userDocument: FormGroup;
  loading = false;
  birthAllowed = false;
  VehicleCategoryAllowed = false;
  FatherNameAllowed = false; 
  returnUrl: string;
  docType = ['Aadhar Card', 'Driving Licence', 'Pancard', 'Passport', 'Voter ID Card'];
  vehicleCategory = ['Light Motor Vehicle','Motorcycle With Gear','Motorcycle Without Gear','Light Motor Vehicle','Light Motor Vehicle—Non Transport','Light Motor Vehicle—Transport','Heavy Motor Vehicle', 'Heavy Passenger Motor Vehicle' ]
 
  options: DatepickerOptions = {
    minYear: 1900,
    maxYear: 2030,    
    displayFormat: 'MM/DD/YYYY',
    barTitleFormat: 'MM/DD/YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    barTitleIfEmpty: 'Click to select a date',
    placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
    addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
    addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
    fieldId: 'dob', // ID to assign to the input field. Defaults to datepicker-<counter>
    useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
  };

  constructor(
    private alertService: AlertService,
    private router: Router,
    private documentService: DocumentService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  
  ngOnInit() {
    
    //init for aadhar card
    this.birthAllowed = true;

    this.userDocument = new FormGroup({
      type: new FormControl('Aadhar Card', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),     
      number: new FormControl(''),
      vehicleCategory: new FormControl('Light Motor Vehicle'),
      dob: new FormControl(''),
      fatherName: new FormControl(''),
      owner: new FormControl(this.currentUser._id),
      created: new FormControl(Date.now()),
      updated: new FormControl(Date.now())
    });
  }

  onSubmit({ value, valid }: { value: Document, valid: boolean }) {
    if (valid) {
      this.loading = true;
      this.documentService.add(value)
          .subscribe(
            data => {
              this.loading = false;
              this.alertService.success('New document added successfully, Thank you', true);
              this.router.navigate(['/dashboard']);
            },
            error => {
              this.alertService.error(error._body);
              this.loading = false;
            });
    }
  }

  public onDocTypeSelect(event): void {  // event will give you full breif of action
    const SelectDocValue = event.target.value;
 
    switch (SelectDocValue){ 
      case 'Pancard': 
        this.FatherNameAllowed = true;
        this.birthAllowed = true;
        this.VehicleCategoryAllowed = false;
        break; 
      case 'Aadhar Card': 
        this.FatherNameAllowed = false;
        this.birthAllowed = true;
        this.VehicleCategoryAllowed = false;
        break;
      case 'Driving Licence': 
        this.FatherNameAllowed = false;
        this.birthAllowed = false;
        this.VehicleCategoryAllowed = true;
        break; 
      case 'Passport': 
        this.FatherNameAllowed = false;
        this.birthAllowed = true;
        this.VehicleCategoryAllowed = false;
        break;  
      case 'Voter ID Card': 
        this.FatherNameAllowed = false;
        this.birthAllowed = false;
        this.VehicleCategoryAllowed = false;
        break;
      default: 
        alert("Please select valid document");
    } 
  }
}

