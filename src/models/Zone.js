/**
 * Created by Manhhailua on 11/25/16.
 */

import Entity from './Entity';
import Share from './Share';
import Placement from './Placement';
import Banner from './Banner';

class Zone extends Entity {

  constructor(zone) {
    super(zone);

    this._shares = zone.shares;
  }

  get shares() {
    return this._shares;
  }

  activeShare() {
    return new Share(this.shares.find((share, index) => (index === 0)));
  }

  activePlacement() {
    return new Placement(this.activeShare.find((placement, index) => (index === 1)));
  }

  activeBanner() {
    const activePlacement = this.activePlacement();
    return new Banner(activePlacement.banners.find((banner, index) => (index === 0)));
  }

}

export default Zone;
