import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/utilities/_services/common.service';
import clientsData from '../../assets/json/clients.json';
import * as $ from 'jquery';
import { init } from 'emailjs-com';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NgxUiLoaderService } from 'ngx-ui-loader';
init('user_DxTX2CUlyR3jLBCdCR7xG');

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  Form: FormGroup;
  submitted: boolean = false;
  date: any;

  imageObject = clientsData;
  isMobile: boolean = false;
  dateOfBirth: any;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private ngxService: NgxUiLoaderService
  ) {
    this.breakpointObserver
      .observe(['(max-width: 417px)'])
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      });
  }

  ngOnInit() {
    this.date = this.commonService.getFormatedDate(
      new Date(new Date().setFullYear(new Date().getFullYear() - 5))
    );
    this.init();
  }

  init() {
    this.Form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl('', [Validators.required]),
    });
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard'], {
      queryParams: { dob: this.dateOfBirth },
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.Form.invalid) {
      return;
    }
    this.dateOfBirth = this.Form.value.dob;
    
    this.ngxService.start();

    setTimeout(() => {   
      this.navigateToDashboard(); 
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 2000);

    // let element: HTMLElement = document.getElementById('sendMessageToWhatsapp') as HTMLElement;
    // element.click();

  //   var data = {
  //     service_id: 'service_lrqinqj',
  //     template_id: 'template_ac9y63v',
  //     user_id: 'user_DxTX2CUlyR3jLBCdCR7xG',
  //     template_params: {
  //       subject: 'Enquiry',
  //       name: this.Form.value.name,
  //       from: this.Form.value.email,
  //       contact: this.Form.value.phone,
  //       message: 'Recommendation Message',
  //       data: this.Form.value.dob
  //     },
  //   };

  //   $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
  //     type: 'POST',
  //     data: JSON.stringify(data),
  //     contentType: 'application/json',
  //   })
  //     .done(function () {
  //       alert('Your mail is sent!');
  //     })
  //     .fail(function (error) {
  //       alert('Oops... ' + JSON.stringify(error));
  //     });
  //   this.Form.reset();
    }
}
