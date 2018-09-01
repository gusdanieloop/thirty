import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabbarFooterPage } from './../pages/tabbar-footer/tabbar-footer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = TabbarFooterPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  }
}
