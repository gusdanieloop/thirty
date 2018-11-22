import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { StarfillServiceProvider } from './../../providers/starfill-service/starfill-service';
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
  companiesStar: any;

  private _uriPathDao: string = '/companies/companyDetail';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _serverHttp: ServeHttpServiceProvider,
    private _starFill : StarfillServiceProvider
  ) { }

  ionViewDidLoad() {
    this.getCompanies();
  }

  ionViewDidEnter() {
    this.getCompanies();
  }

  getCompanies() {
    this._serverHttp.httpRead(this._uriPathDao).subscribe(
      (list: Company[]) => {
        this.companyList = list;

        for (let company of this.companyList) {
          company.starList = this.getStars(company.average_rating);
        }

      },
      error => alert('Ocorreu um erro.')
    );
  }

  getCompanyRoute() {
    this.navCtrl.push(CompanyRoutePage);
  }

  getCompanyMenu(company: Company) {
    this.navCtrl.push(CompanyMenuPage.name, {
      selectedCompany: company
    });
  }

  getCompanyImages(company: Company) {
    this.navCtrl.push(CompanyImagePage.name, {
      selectedCompany: company
    });
  }

  getRatingPage(company: Company) {
    this.navCtrl.push(CompanyRatingPage.name, {
      selectedCompany: company
    });
  }

  getStars(starNumber = 0) {
    return this._starFill.getStarfill(starNumber);
  }

}
