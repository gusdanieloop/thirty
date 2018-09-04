import { Component } from '@angular/core';

import { IonicPage, ViewController, NavController } from 'ionic-angular';

import { CompanyImagePage } from '../../company/company-image/company-image';
import { CompanyMenuPage } from '../../company/company-menu/company-menu';
import { CompanyRoutePage } from '../../company/company-route/company-route';
import { RatingPage } from './../../rating/rating';

@IonicPage()
@Component({
  selector: 'page-timeline-popover',
  templateUrl: 'timeline-popover.html',
})
export class TimelinePopoverPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }

  getRatingPage() {
    this.navCtrl.push(RatingPage);
    this.close();
  }

  getCompanyRoute() {
    this.navCtrl.push(CompanyRoutePage);
    this.close();
  }

  getCompanyMenu() {
    this.navCtrl.push(CompanyMenuPage);
    this.close();
  }

  getCompanyImages() {
    this.navCtrl.push(CompanyImagePage);
    this.close();
  }

}
