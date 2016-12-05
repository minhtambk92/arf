/**
 * Created by Manhhailua on 11/30/16.
 */

import Entity from './Entity';
import Banner from './Banner';

class Placement extends Entity {

  constructor(placement) {
    super(placement);

    this._banners = placement.banners; // eslint-disable-line
  }

  get banners() {
    return this._banners;
  }

  async activeBanner() {
    const tmpBanner = await this.banners.find((banner, index) => (index === 1));
    return new Banner(tmpBanner);
  }
}

export default Placement;
