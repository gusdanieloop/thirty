import { Component } from '@angular/core';

import { PopoverController, NavController, NavParams } from 'ionic-angular';

import { CompanyDescriptionPage } from './../company/company-description/company-description';
import { TimelinePopoverPage } from './timeline-popover/timeline-popover';

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController
  ) { }

  ionViewDidLoad() { }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(TimelinePopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  getCompanyDescriptionPage(name) {
    this.navCtrl.push(CompanyDescriptionPage.name, {
      companyName: name
    });
  }

}
