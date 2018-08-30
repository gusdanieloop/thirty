import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimelinePopoverPage } from './timeline-popover';

@NgModule({
  declarations: [
    TimelinePopoverPage,
  ],
  exports: [
    TimelinePopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(TimelinePopoverPage),
  ],
})
export class TimelinePopoverPageModule {}
