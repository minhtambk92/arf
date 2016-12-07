/**
 * Created by Manhhailua on 11/25/16.
 */

import Entity from './Entity';
import Share from './Share';

class Zone extends Entity {

  constructor(zone) {
    super(zone);

    this._shares = zone.shares;
  }

  get shares() {
    return this._shares;
  }

  getShareByIndex(index = 0) {
    return new Share(this.shares[index]);
  }

  activeShare() {
    const randomNumber = Math.random() * 100;

    const tmpShare = this.shares.reduce((range, share) => {
      const nextRange = range + share.weight;

      if (typeof range === 'object') {
        return range;
      }

      if (randomNumber >= range && randomNumber < nextRange) {
        return Object.assign({}, share);
      }

      return nextRange;
    }, 0);

    return new Share(tmpShare);
  }

  activePlacement() {
    const tmpShare = this.activeShare();
    return tmpShare.activePlacement();
  }

  activeBanner() {
    const tmpPlacement = this.activePlacement();
    return tmpPlacement.activeBanner();
  }

}

export default Zone;
