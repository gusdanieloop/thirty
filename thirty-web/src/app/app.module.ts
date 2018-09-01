import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FilterPageModule } from '../pages/filter/filter.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { TabbarFooterPageModule } from '../pages/tabbar-footer/tabbar-footer.module';
import { TimelinePageModule } from '../pages/timeline/timeline.module';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SettingsPageModule,
    FilterPageModule,
    TabbarFooterPageModule,
    TimelinePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
