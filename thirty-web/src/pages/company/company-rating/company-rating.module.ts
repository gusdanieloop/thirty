import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyRatingPage } from './company-rating';

@NgModule({
  declarations: [
    CompanyRatingPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyRatingPage),
  ],
  exports: [
    CompanyRatingPage,
  ]
})
export class CompanyRatingPageModule {}
