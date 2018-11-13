import { Injectable } from '@angular/core';

const ZERO_STAR = ['star-outline', 'star-outline', 'star-outline', 'star-outline', 'star-outline'];
const ONE_STAR = ['star', 'star-outline', 'star-outline', 'star-outline', 'star-outline'];
const TWO_STARS = ['star', 'star', 'star-outline', 'star-outline', 'star-outline'];
const TRHEE_STARS = ['star', 'star', 'star', 'star-outline', 'star-outline'];
const FOUR_STARS = ['star', 'star', 'star', 'star', 'star-outline'];
const FIVE_STARS = ['star', 'star', 'star', 'star', 'star'];

@Injectable()
export class StarfillServiceProvider {

  constructor() { }

  getStarfill(starNumber) {
    let stars;

    switch (starNumber) {
      case 1:
        return stars = ONE_STAR;
      case 2:
        return stars = TWO_STARS;
      case 3:
        return stars = TRHEE_STARS;
      case 4:
        return stars = FOUR_STARS;
      case 5:
        return stars = FIVE_STARS;
      default:
        return stars = ZERO_STAR;
    }
  }

}
