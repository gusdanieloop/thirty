import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServeHttpServiceProvider } from './../../../providers/serve-http-service/serve-http-service';

import { Company } from './../../timeline/company.object';
import { Rating } from './company-rating.object';

const ZERO_STAR = ['star-outline', 'star-outline', 'star-outline', 'star-outline', 'star-outline'];
const ONE_STAR = ['star', 'star-outline', 'star-outline', 'star-outline', 'star-outline'];
const TWO_STARS = ['star', 'star', 'star-outline', 'star-outline', 'star-outline'];
const TRHEE_STARS = ['star', 'star', 'star', 'star-outline', 'star-outline'];
const FOUR_STARS = ['star', 'star', 'star', 'star', 'star-outline'];
const FIVE_STARS = ['star', 'star', 'star', 'star', 'star'];

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
    private _serverHttp: ServeHttpServiceProvider
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
    this._serverHttp.httpRead(this._uriPathDao).subscribe(
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
    switch (starNumber) {
      case 1:
        this.stars = ONE_STAR;
        this.rating.stars = 1;
        break;
      case 2:
        this.stars = TWO_STARS;
        this.rating.stars = 2;
        break;
      case 3:
        this.stars = TRHEE_STARS;
        this.rating.stars = 3;
        break;
      case 4:
        this.stars = FOUR_STARS;
        this.rating.stars = 4;
        break;
      case 5:
        this.stars = FIVE_STARS;
        this.rating.stars = 5;
        break;
      default:
        this.stars = ZERO_STAR;
        break;
    }
  }

}
