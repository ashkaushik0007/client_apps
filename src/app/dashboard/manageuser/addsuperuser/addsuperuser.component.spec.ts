import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsuperuserComponent } from './addsuperuser.component';

describe('AddsuperuserComponent', () => {
  let component: AddsuperuserComponent;
  let fixture: ComponentFixture<AddsuperuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsuperuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsuperuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
