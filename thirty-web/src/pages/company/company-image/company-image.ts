import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServeHttpServiceProvider } from '../../../providers/serve-http-service/serve-http-service';

import { Company } from '../../timeline/company.object';
import { Image } from './company-image.object';

@IonicPage()
@Component({
  selector: 'page-company-image',
  templateUrl: 'company-image.html',
})
export class CompanyImagePage {

  company: Company;
  imageList: Image[];

  private _uriPathDao: string = '/companies/companyImage';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _httpService: ServeHttpServiceProvider) {
      this.company = this.navParams.get('selectedCompany');
  }

  ionViewDidLoad() {
    this.getImages();
  }

  getImages() {
    this._httpService.httpReadbyId(this._uriPathDao + '/', this.company.id,).subscribe(
      (list: Image[]) => {
        list.length > 0 ? this.imageList = list : this.imageList = undefined;
      },
      error => alert('Ocorreu um erro.')
    )
  }

}
