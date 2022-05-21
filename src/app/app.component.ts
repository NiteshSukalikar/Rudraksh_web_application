import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Router } from '@angular/router';

//model
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AppService } from './utilities/_services/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'curie-frontend';
  ipaddress: any;
  country: any;

  //timeout
  idleState = 'Not started.';
  timedOut = false;
  public modalRef: BsModalRef;
  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
  lastPing: Date;

  constructor(
    private ngxService: NgxUiLoaderService,
    private idle: Idle,
    keepalive: Keepalive,
    private router:Router,
    private appService:AppService
  ) {
    //
  }


  ngOnInit() {
  }
}
