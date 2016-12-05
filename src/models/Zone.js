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

  async activeShare() {
    const tmpShare = await this.shares.find((share, index) => (index === 0));
    return new Share(tmpShare);
  }

  async activePlacement() {
    const tmpShare = await this.activeShare();
    return tmpShare.activePlacement();
  }

  async activeBanner() {
    const tmpPlacement = await this.activePlacement();
    return tmpPlacement.activeBanner();
  }

}

export default Zone;
