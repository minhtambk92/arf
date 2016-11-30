/**
 * Created by Manhhailua on 11/25/16.
 */

import Entity from './Entity';
import Placement from './Placement';
import Banner from './Banner';

class Zone extends Entity {

  constructor(zone) {
    super(zone);

    this._placements = zone.placements;
  }

  get placements() {
    return this._placements;
  }

  activePlacement() {
    return new Placement(this.placements.find((placement, index) => (index === 1)));
  }

  activeBanner() {
    const activePlacement = this.activePlacement();
    return new Banner(activePlacement.banners.find((banner, index) => (index === 0)));
  }

}

export default Zone;
