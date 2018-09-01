import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabbarFooterPage } from './tabbar-footer';

@NgModule({
  declarations: [
    TabbarFooterPage,
  ],
  imports: [
    IonicPageModule.forChild(TabbarFooterPage),
  ],
  exports: [
    TabbarFooterPage,
  ]
})
export class TabbarFooterPageModule {}
