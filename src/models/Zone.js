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

  /**
   * Get a active share randomly by its weight
   * @return {Share}
   */
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

  /**
   * Get array of active placements
   * @returns [Placement]
   */
  activePlacements() {
    const tmpShare = this.activeShare();
    return tmpShare.activePlacements();
  }

  /**
   * Get array of active banners from all placements
   * @return [Banner]
   */
  activeBanner() {
    const tmpPlacements = this.activePlacements();
    return tmpPlacements.map(placement => placement.activeBanner());
  }

}

export default Zone;
