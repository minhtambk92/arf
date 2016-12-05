/**
 * Created by Manhhailua on 11/30/16.
 */

import Entity from './Entity';
import Banner from './Banner';

class Placement extends Entity {

  constructor(placement) {
    super(placement);

    this._banners = placement.banners;
  }

  get banners() {
    return this._banners;
  }

  activeBanner() {
    const tmpBanner = this.banners.find((banner, index) => (index === 0));
    return new Banner(tmpBanner);
  }
}

export default Placement;
