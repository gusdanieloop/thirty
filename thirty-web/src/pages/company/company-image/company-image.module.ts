import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyImagePage } from './company-image';

@NgModule({
  declarations: [
    CompanyImagePage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyImagePage),
  ],
  exports: [
    CompanyImagePage,
  ]
})
export class CompanyImagePageModule {}
