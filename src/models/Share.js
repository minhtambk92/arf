/**
 * Created by Manhhailua on 12/5/16.
 */

import Entity from './Entity';
import Placement from './Placement';
import { util } from '../vendor';

class Share extends Entity {

  constructor(share) {
    super(share);

    this.id = `share-${share.id}`;
    this.placements = share.placements;
  }

  get shareArea() {
    return util.convertArea(this.height, this.width);
  }

  /**
   * Get all placements from this share
   * @returns [Placement]
   */
  get allPlacements() {
    return this.placements.map(placement => new Placement(placement));
  }

  /**
   * Pull out one placement randomly by its "weight"
   * @returns {Placement}
   */
  activePlacement() {
    const randomNumber = Math.random() * 100;

    return this.allPlacements.reduce((range, placement) => {
      const nextRange = range + placement.weight;

      if (typeof range === 'object') {
        return range;
      }

      if (randomNumber >= range && randomNumber < nextRange) {
        return placement;
      }

      return nextRange;
    }, 0);
  }

  /**
   * Check for share type then return array of placements
   * @returns [Placement]
   */
  activePlacements() {
    if (this.type === 'multiple') {
      return this.allPlacements;
    }

    return [this.activePlacement()];
  }

}

export default Share;
