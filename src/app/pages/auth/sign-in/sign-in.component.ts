import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  CountryISO,
  PhoneNumberFormat,
  SearchCountryField,
} from 'ngx-intl-tel-input';
import { CommonService } from 'src/app/utilities/_services/common.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  Form: FormGroup;
  submitted: boolean = false;
  date: any;

  constructor(private commonService:CommonService) {}

  ngOnInit() {
    this.date = this.commonService.getFormatedDate(new Date(new Date().setFullYear(new Date().getFullYear() - 20)));
    this.init()
  }

  init() {
    this.Form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(){
    this.submitted = true;
    if (this.Form.invalid) {
      return
    }
    console.log(this.Form.value);
  }
}
