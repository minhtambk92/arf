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
   * Get all shares from this zone
   * @returns [Share]
   */
  get allShares() {
    return this.shares.map(share => new Share(share));
  }

  /**
   * Get a active share randomly by its weight
   * @return {Share}
   */
  activeShare() {
    const randomNumber = Math.random() * 100;

    return this.allShares.reduce((range, share) => {
      const nextRange = range + share.weight;

      if (typeof range === 'object') {
        return range;
      }

      if (randomNumber >= range && randomNumber < nextRange) {
        return share;
      }

      return nextRange;
    }, 0);
  }

  /**
   * Get array of active placements
   * @returns [Placement]
   */
  activePlacements() {
    const activeShareModel = this.activeShare();
    return activeShareModel.activePlacements();
  }

  /**
   * Get array of active banners from all placements
   * @return [Banner]
   */
  activeBanner() {
    const activePlacementsModels = this.activePlacements();
    return activePlacementsModels.map(placement => placement.activeBanner());
  }

}

export default Zone;
