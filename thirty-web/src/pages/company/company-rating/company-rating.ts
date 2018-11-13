import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServeHttpServiceProvider } from './../../../providers/serve-http-service/serve-http-service';
import { StarfillServiceProvider } from './../../../providers/starfill-service/starfill-service';

import { Company } from './../../timeline/company.object';
import { Rating } from './company-rating.object';

// check improvement
const ZERO_STAR = ['star-outline', 'star-outline', 'star-outline', 'star-outline', 'star-outline'];

@IonicPage()
@Component({
  selector: 'page-company-rating',
  templateUrl: 'company-rating.html',
})
export class CompanyRatingPage {

  company: Company;
  rating: Rating;
  ratingList: Rating[];
  stars: Array<string>;

  private _uriPathDao: string = '/companies/companyRating';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _alertCtrl: AlertController,
    private _serverHttp: ServeHttpServiceProvider,
    private _starFill: StarfillServiceProvider
  ) {
    this.resetForm();

    this.company = this.navParams.get('selectedCompany');
  }

  ionViewDidLoad() {
    this.getRatings();
    this.checkForm();
  }

  calculateRatingMedia(ratingList: Rating[]) {
    let ratingMedia = 0;
    let divider = 0;

    for(let rating of ratingList) {
      ratingMedia += rating.stars;
      divider++;
    }
    ratingMedia /= divider;
    ratingMedia = Math.floor(ratingMedia);

    this.saveCompanyRating(ratingMedia);
  }

  checkForm() {
    if (this.rating.comment && (this.rating.stars > 0 && this.rating.stars < 6)) {
      return false;
    }
    return true;
  }

  getRatings() {
    this._serverHttp.httpReadbyId(this._uriPathDao + '/', this.company.id).subscribe(
      (list: Rating[]) => {
        list.length > 0 ? this.ratingList = list : this.ratingList = undefined;
        this.resetForm();
      },
      error => alert('Ocorreu um erro.')
    );
  }

  updateRating() {
    this._serverHttp.httpUpdate(this._uriPathDao, this.rating)
    .subscribe(
      () => alert('Ok'),
      () => alert('BAD')
    );
  }

  sendRating() {
    this.rating.company_id = this.company.id;

    this._serverHttp.httpCreate(this._uriPathDao, this.rating)
      .subscribe(
        () => {
          alert('Ok');
          this.rating = new Rating();
          this.calculateRatingMedia(this.ratingList);
          return;
        },
        () => {
          alert('BAD');
          return;
        }
      );
  }

  resetForm() {
    this.rating = new Rating();
    this.rating.comment = "";
    this.rating.stars = 0;
    this.stars = ZERO_STAR;
  }

  saveCompanyRating(average: number) {
    const uriCompany = '/companies/companyDetail';
    this.company.average_rating = average;
    this._serverHttp.httpUpdate(uriCompany, this.company).subscribe();
    this.getRatings();
  }

  selectStarsRating(starNumber) {
    this.rating.stars = starNumber;
    this.stars = this._starFill.getStarfill(starNumber);
  }

}
