import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-company-menu',
  templateUrl: 'company-menu.html',
})
export class CompanyMenuPage {

  dishes: boolean;
  drinks: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
