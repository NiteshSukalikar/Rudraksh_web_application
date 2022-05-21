import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { customNotifierOptions } from './utilities/_services/notification.service';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AvatarModule } from 'ngx-avatar';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    //MainModule,
    AvatarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NotifierModule.withConfig(customNotifierOptions),
    NgxUiLoaderModule,
    NgxPaginationModule,
    NgIdleKeepaliveModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    AngularEditorModule 
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
