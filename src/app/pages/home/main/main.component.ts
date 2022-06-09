import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/utilities/_services/common.service';
import * as $ from 'jquery';
import { init } from 'emailjs-com';
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

  imageObject: Array<object> = [
    {
      image: '../../../../assets/images/client-2.jpg',
      thumbImage: '../../../../assets/images/client-2.jpg',
      alt: 'Manoj Bajpayee ',
      title: 'Manoj Bajpayee',
    },
    {
      image: '../../../../assets/images/client-3.jpg',
      thumbImage: '../../../../assets/images/client-3.jpg',
      alt: 'Manoj Bajpayee',
      title: 'Manoj Bajpayee',
    },
    {
      image: '../../../../assets/images/client-5.jpg',
      thumbImage: '../../../../assets/images/client-5.jpg',
      alt: 'Mr. Amitabh Jhunjhunwala',
      title: 'Mr. Amitabh Jhunjhunwala',
    },
    {
      image: '../../../../assets/images/client-7.jpg',
      thumbImage: '../../../../assets/images/client-7.jpg',
      alt: 'Mr. T.S Krishnamurthy',
      title: 'Mr. T.S Krishnamurthy',
    },
    {
      image: '../../../../assets/images/client-11.jpg',
      thumbImage: '../../../../assets/images/client-11.jpg',
      alt: 'Ms. Dimple Kapadia',
      title: 'Ms. Dimple Kapadia',
    },
    {
      image: '../../../../assets/images/client-12.jpg',
      thumbImage: '../../../../assets/images/client-12.jpg',
      alt: 'Mr. Shardul S. Shroff',
      title: 'Mr. Shardul S. Shroff',
    },
    {
      image: '../../../../assets/images/client-13.jpg',
      thumbImage: '../../../../assets/images/client-13.jpg',
      alt: 'Mr. Shreemat Pandey',
      title: 'Mr. Shreemat Pandey',
    },
    {
      image: '../../../../assets/images/client-15.jpg',
      thumbImage: '../../../../assets/images/client-15.jpg',
      alt: 'Dr. P.V.Shetty',
      title: 'Dr. P.V.Shetty',
    },
    {
      image: '../../../../assets/images/client-17.jpg',
      thumbImage: '../../../../assets/images/client-17.jpg',
      alt: 'Mr. Karan Paul',
      title: 'Mr. Karan Paul',
    },
    {
      image: '../../../../assets/images/client-47.jpg',
      thumbImage: '../../../../assets/images/client-47.jpg',
      alt: 'Ms. Shilpa Shetty',
      title: 'Ms. Shilpa Shetty',
    },
  ];

  constructor(private commonService: CommonService, private router: Router) {}

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

  onSubmit() {
    this.submitted = true;
    if (this.Form.invalid) {
      return;
    }
    this.router.navigate(['home/dashboard'], {
      queryParams: { dob: this.Form.value.dob },
    });
    // let element: HTMLElement = document.getElementById('sendMessageToWhatsapp') as HTMLElement;
    // element.click();

    // var data = {
    //   service_id: 'service_pd3ub26',
    //   template_id: 'template_ac9y63v',
    //   user_id: 'user_DxTX2CUlyR3jLBCdCR7xG',
    //   template_params: {
    //     subject: 'Enquiry',
    //     name: this.Form.value.name,
    //     from: this.Form.value.email,
    //     contact: this.Form.value.phone,
    //     message: 'Recommendation Message',
    //   },
    // };

    // $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    //   type: 'POST',
    //   data: JSON.stringify(data),
    //   contentType: 'application/json',
    // })
    //   .done(function () {
    //     alert('Your mail is sent!');
    //   })
    //   .fail(function (error) {
    //     alert('Oops... ' + JSON.stringify(error));
    //   });
    // this.Form.reset();
  }
}
