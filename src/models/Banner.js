/**
 * Created by Manhhailua on 11/30/16.
 */

import Entity from './Entity';

class Banner extends Entity {

  constructor(banner) {
    super(banner);

    this._relative = banner.relative;
  }

  get relative() {
    return this._relative;
  }

}

export default Banner;
