import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CompanyImagePageModule } from '../pages/company/company-image/company-image.module';
import { CompanyMenuPageModule } from './../pages/company/company-menu/company-menu.module';
import { CompanyRatingPageModule } from '../pages/company/company-rating/company-rating.module';
import { CompanyRoutePageModule } from './../pages/company/company-route/company-route.module';
import { FilterPageModule } from '../pages/filter/filter.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { TabbarFooterPageModule } from '../pages/tabbar-footer/tabbar-footer.module';
import { TimelinePageModule } from '../pages/timeline/timeline.module';
import { ServeHttpServiceProvider } from '../providers/serve-http-service/serve-http-service';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CompanyImagePageModule,
    CompanyMenuPageModule,
    CompanyRatingPageModule,
    CompanyRoutePageModule,
    SettingsPageModule,
    FilterPageModule,
    HttpClientModule,
    TabbarFooterPageModule,
    TimelinePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    HttpClientModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    ServeHttpServiceProvider
  ]
})
export class AppModule {}
