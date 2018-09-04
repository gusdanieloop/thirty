import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TimelinePage } from './timeline';
import { TimelinePopoverPageModule } from './timeline-popover/timeline-popover.module';

@NgModule({
  declarations: [
    TimelinePage,
  ],
  imports: [
    IonicPageModule.forChild(TimelinePage),
    TimelinePopoverPageModule,
  ],
  exports: [
    TimelinePage,
  ]
})
export class TimelinePageModule {}
