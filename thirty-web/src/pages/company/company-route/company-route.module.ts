import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyRoutePage } from './company-route';

@NgModule({
  declarations: [
    CompanyRoutePage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyRoutePage),
  ],
  exports: [
    CompanyRoutePage,
  ]
})
export class CompanyRoutePageModule {}
