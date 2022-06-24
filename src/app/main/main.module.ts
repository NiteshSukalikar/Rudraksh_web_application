import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgImageSliderModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: MainComponent }]),
  ],
  declarations: [MainComponent]
})
export class MainModule { }
