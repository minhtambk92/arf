/**
 * Created by Manhhailua on 11/30/16.
 */

import Entity from './Entity';

class Placement extends Entity {

  constructor(placement) {
    super(placement);

    this._banners = placement.banners; // eslint-disable-line
  }

  get banners() {
    return this._banners;
  }

}

export default Placement;
