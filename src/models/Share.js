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
    return this._placements;
  }

  getPlacementByIndex(index = 0) {
    return new Placement(this.placements[index]);
  }

  activePlacement() {
    const tmpPlacement = this.placements.find((placement, index) => (index === 0));
    return new Placement(tmpPlacement);
  }
}

export default Share;
