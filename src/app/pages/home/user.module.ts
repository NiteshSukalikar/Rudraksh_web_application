import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  imports: [CommonModule,UserRoutingModule,FormsModule,ReactiveFormsModule,NgImageSliderModule],
  declarations: [
    MainComponent,
    DashboardComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule {}
