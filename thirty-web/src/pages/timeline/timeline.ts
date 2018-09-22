import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CompanyImagePage } from '../company/company-image/company-image';
import { CompanyMenuPage } from '../company/company-menu/company-menu';
import { CompanyRoutePage } from '../company/company-route/company-route';
import { CompanyRatingPage } from '../company/company-rating/company-rating';

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() { }

  getRatingPage() {
    this.navCtrl.push(CompanyRatingPage);
  }

  getCompanyRoute() {
    this.navCtrl.push(CompanyRoutePage);
  }

  getCompanyMenu() {
    this.navCtrl.push(CompanyMenuPage);
  }

  getCompanyImages() {
    this.navCtrl.push(CompanyImagePage);
  }

}
