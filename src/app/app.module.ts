import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    NgImageSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxUiLoaderModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
