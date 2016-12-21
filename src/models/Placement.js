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

  /**
   * Get all banners from this placement
   * @returns [Banner]
   */
  get allBanners() {
    return this.banners.map(banner => new Banner(banner));
  }

  /**
   * Get active banner by its weight
   * @returns {Banner}
   */
  activeBanner() {
    const randomNumber = Math.random() * 100;

    return this.allBanners.reduce((range, banner) => {
      const nextRange = range + banner.weight;

      if (typeof range === 'object') {
        return range;
      }

      if (randomNumber >= range && randomNumber < nextRange) {
        return banner;
      }

      return nextRange;
    }, 0);
  }

}

export default Placement;
