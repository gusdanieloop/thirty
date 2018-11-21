import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServeHttpServiceProvider } from './../../../providers/serve-http-service/serve-http-service';

import { Company } from './../../timeline/company.object';
import { Menu } from './company-menu.object';

const DRINKS = 1;
const DISHES = 2;

@IonicPage()
@Component({
  selector: 'page-company-menu',
  templateUrl: 'company-menu.html',
})
export class CompanyMenuPage {

  company: Company;
  menuDishesList: Menu[];
  menuDrinkList: Menu[];
  dishes: boolean;
  drinks: boolean;

  private _uriPathDao: string = '/companies/companyMenu';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _serverHttp: ServeHttpServiceProvider) {

      this.company = this.navParams.get('selectedCompany');
      this.dishes = false;
      this.drinks = false;
  }

  ionViewDidLoad() {
    if (this.company) {
      this.getMenuDishes();
      this.getMenuDrinks();
    }
  }

  getMenuDishes() {
    this._serverHttp.httpReadbyParamaters(this._uriPathDao + '/', this.company.id, DISHES).subscribe(
      (list: Menu[]) => {
        list.length > 0 ? this.menuDishesList = list : this.menuDishesList = undefined;
      },
        error => alert('Ocorreu um erro X.')
    );
  }

  getMenuDrinks() {
    this._serverHttp.httpReadbyParamaters(this._uriPathDao + '/', this.company.id, DRINKS).subscribe(
      (list: Menu[]) => {
        list.length > 0 ? this.menuDrinkList = list : this.menuDrinkList = undefined;
      },
        error => alert('Ocorreu um erro.')
    );
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
