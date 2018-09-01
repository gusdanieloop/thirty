import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FilterPage } from './../filter/filter';
import { SettingsPage } from './../settings/settings';
import { TimelinePage } from '../timeline/timeline';


@IonicPage()
@Component({
  selector: 'page-tabbar-footer',
  templateUrl: 'tabbar-footer.html',
})
export class TabbarFooterPage {

  tab1Root = TimelinePage;
  tab2Root = FilterPage;
  tab3Root = SettingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabbarFooterPage');
  }

}
