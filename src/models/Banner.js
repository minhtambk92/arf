/**
 * Created by Manhhailua on 11/30/16.
 */

import Entity from './Entity';

class Banner extends Entity {

  constructor(banner) {
    super(banner);

    this.id = `banner-${banner.id}`;
    this.relative = banner.relative;
  }

}

export default Banner;
