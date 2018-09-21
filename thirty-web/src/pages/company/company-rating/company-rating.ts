import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-company-rating',
  templateUrl: 'company-rating.html',
})
export class CompanyRatingPage {

  rating: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.rating = 0;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatingPage');
  }

}
