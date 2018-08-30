import { Component } from '@angular/core';
import { IonicPage, PopoverController } from 'ionic-angular';
import { TimelinePopoverPage } from './timeline-popover/timeline-popover';

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  constructor(public popoverCtrl: PopoverController) { }

  ionViewDidLoad() { }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(TimelinePopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
