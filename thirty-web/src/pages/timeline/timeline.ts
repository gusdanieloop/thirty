import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ServeHttpServiceProvider } from '../../providers/serve-http-service/serve-http-service';

import { Company } from './company.object';
import { CompanyImagePage } from '../company/company-image/company-image';
import { CompanyMenuPage } from '../company/company-menu/company-menu';
import { CompanyRatingPage } from '../company/company-rating/company-rating';
import { CompanyRoutePage } from '../company/company-route/company-route';

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  companyList: Company[];

  private _uriPathDao: string = '/companies/companyDetail';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _serverHttp: ServeHttpServiceProvider
  ) { }

  ionViewDidLoad() {
    this.getCompanies();
  }

  getCompanies() {
    this._serverHttp.httpRead(this._uriPathDao)
    .subscribe(
      (list: Company[]) => this.companyList = list,
      error => alert('Ocorreu um erro.')
    );
  }

  getCompanyRoute() {
    this.navCtrl.push(CompanyRoutePage);
  }

  getCompanyMenu() {
    this.navCtrl.push(CompanyMenuPage);
  }

  getCompanyImages() {
    this.navCtrl.push(CompanyImagePage);
  }

  getRatingPage(company: Company) {
    this.navCtrl.push(CompanyRatingPage.name, {
      selectedCompany: company
    });
  }

}
