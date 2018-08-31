import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-company-description',
  templateUrl: 'company-description.html',
})
export class CompanyDescriptionPage {

  public companyName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.companyName = this.navParams.get('companyName');
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CompanyDescriptionPage');
  }

}
