import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Company } from './../../timeline/company.object';

@IonicPage()
@Component({
  selector: 'page-company-menu',
  templateUrl: 'company-menu.html',
})
export class CompanyMenuPage {

  company: Company;

  dishes: boolean;
  drinks: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.company = this.navParams.get('selectedCompany');
    this.dishes = false;
    this.drinks = false;
  }

  ionViewDidLoad() {
  }

  showMenuItem(itemType: string) {

    if (itemType === 'dishes') {
      this.dishes = !this.dishes;
    }

    if (itemType === 'drinks') {
      this.drinks = !this.drinks;
    }

  }

}
