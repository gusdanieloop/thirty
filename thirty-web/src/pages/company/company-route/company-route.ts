import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@IonicPage()
@Component({
  selector: 'page-company-route',
  templateUrl: 'company-route.html',
})
export class CompanyRoutePage {

  // let options: LaunchNavigatorOptions = {
  //   start: 'London, ON'
  //   // app: LaunchNavigator.APPS.UBER
  // };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // private _launchNavigator: LaunchNavigator
    ) {
  }

  // this.launchNavigator.navigate('Toronto, ON', options)
  // .then(
  //   success => console.log('Launched navigator'),
  //   error => console.log('Error launching navigator', error)
  // );

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyRoutePage');
  }

}
