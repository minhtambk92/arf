/**
 * Created by Manhhailua on 12/5/16.
 */

import Entity from './Entity';
import Placement from './Placement';

class Share extends Entity {

  constructor(share) {
    super(share);

    this._placements = share.placements;
  }

  get placements() {
    return this._placements.map(placement => new Placement(placement));
  }

  /**
   * Pull out one placement randomly by its "weight"
   * @returns {Placement}
   */
  activePlacement() {
    const randomNumber = Math.random() * 100;

    const tmpPlacement = this.placements.reduce((range, placement) => {
      const nextRange = range + placement.weight;

      if (typeof range === 'object') {
        return range;
      }

      if (randomNumber >= range && randomNumber < nextRange) {
        return Object.assign({}, placement);
      }

      return nextRange;
    }, 0);

    return new Placement(tmpPlacement);
  }

  /**
   * Check for share type then return array of placements
   * @returns [Placement]
   */
  activePlacements() {
    if (this.type === 'multiple') {
      return this.placements;
    }

    return [this.activePlacement()];
  }

}

export default Share;
