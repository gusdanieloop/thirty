import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServeHttpServiceProvider } from './../../../providers/serve-http-service/serve-http-service';

import { Company } from './../../timeline/company.object';
import { Menu } from './company-menu.object';

@IonicPage()
@Component({
  selector: 'page-company-menu',
  templateUrl: 'company-menu.html',
})
export class CompanyMenuPage {

  company: Company;
  menuList: Menu[];
  dishes: boolean;
  drinks: boolean;

  private _uriPathDao: string = '/companies/companyMenu';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _serverHttp: ServeHttpServiceProvider,) {
    this.company = this.navParams.get('selectedCompany');
    this.dishes = false;
    this.drinks = false;
  }

  ionViewDidLoad() {
    this.getMenus();
  }

  getMenus() {
    this._serverHttp.httpReadbyId(this._uriPathDao + '/', this.company.id).subscribe(
      (list: Menu[]) => {
        list.length > 0 ? this.menuList = list : this.menuList = undefined;
        console.log('menuList', this.menuList);

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
