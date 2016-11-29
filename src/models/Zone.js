/**
 * Created by Manhhailua on 11/25/16.
 */

class Zone {

  constructor(zone) {
    this._raw = zone;
    this._id = this._raw.id;
    this._width = this._raw.width;
    this._height = this._raw.height;
    this._placements = this._raw.placements;
  }

  get raw() {
    return this._raw;
  }

  get id() {
    return this._id;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get placements() {
    return this._placements;
  }

}

export default Zone;
