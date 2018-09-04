import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyMenuPage } from './company-menu';

@NgModule({
  declarations: [
    CompanyMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyMenuPage),
  ],
  exports: [
    CompanyMenuPage,
  ]
})
export class CompanyMenuPageModule {}
