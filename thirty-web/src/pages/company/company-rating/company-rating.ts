import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServeHttpServiceProvider } from './../../../providers/serve-http-service/serve-http-service';

import { Rating } from './company-rating.object';

const ZERO_STAR = [ 'star-outline', 'star-outline', 'star-outline', 'star-outline', 'star-outline'];
const ONE_STAR = [ 'star', 'star-outline', 'star-outline', 'star-outline', 'star-outline'];
const TWO_STARS = [ 'star', 'star', 'star-outline', 'star-outline', 'star-outline'];
const TRHEE_STARS = [ 'star', 'star', 'star', 'star-outline', 'star-outline'];
const FOUR_STARS = [ 'star', 'star', 'star', 'star', 'star-outline'];
const FIVE_STARS = [ 'star', 'star', 'star', 'star', 'star'];

@IonicPage()
@Component({
  selector: 'page-company-rating',
  templateUrl: 'company-rating.html',
})
export class CompanyRatingPage {

  stars: Array<string>;
  rating: Rating;
  ratingList: Rating[];

  private _uriPathDao: string = '/companies/companyRating';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _alertCtrl: AlertController,
    private _serverHttp: ServeHttpServiceProvider
  ) {
    this.rating = new Rating();
    this.rating.stars = 0;
    this.stars = ZERO_STAR;
  }

  ionViewDidLoad() {
    this.getRatings();
    this.checkForm();
  }

  checkForm() {
    if (this.rating.comment && (this.rating.stars > 0 && this.rating.stars < 6)) {
      return false;
    }

    return true;
  }

  getRatings() {
    this._serverHttp.httpRead(this._uriPathDao)
    .subscribe(
      // (list) => list.length > 0 ? this.ratingList = { ...list } : this.ratingList = undefined,
      (list: Rating[]) => this.ratingList = list,
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
    this._serverHttp.httpCreate(this._uriPathDao, this.rating)
      .subscribe(
        () => {
          alert('Ok');
          this.rating = new Rating();
          this.getRatings();
          return;
        },
        () => {
          alert('BAD');
          return;
        }
      );
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

  getStarsRating(starNumber) {
    switch (starNumber) {
      case 1:
        return this.stars = ONE_STAR;
      case 2:
        return this.stars = TWO_STARS;
      case 3:
        return this.stars = TRHEE_STARS;
      case 4:
        return this.stars = FOUR_STARS;
      case 5:
        return this.stars = FIVE_STARS;
      default:
        return this.stars = ZERO_STAR;
    }
  }

}
