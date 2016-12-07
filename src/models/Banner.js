/**
 * Created by Manhhailua on 11/30/16.
 */

import Entity from './Entity';

class Banner extends Entity {

  constructor(banner) {
    super(banner);

    this._type = banner.type;
    this._weight = banner.weight;
  }

  get type() {
    return this._type;
  }

  get weight() {
    return this._weight;
  }

}

export default Banner;
