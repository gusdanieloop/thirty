import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { CompanyRatingServiceProvider } from '../../../providers/company-rating-service/company-rating-service';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _alertCtrl: AlertController,
    private _ratingService: CompanyRatingServiceProvider
  ) {
    this.rating = new Rating();
    this.rating.stars = 0;
    this.stars = ZERO_STAR;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatingPage');
  }

  checkForm() {
    if (this.rating.comment && (this.rating.stars > 0 && this.rating.stars < 6)) {
      return false;
    }

    return true;
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
