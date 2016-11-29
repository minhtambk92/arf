/**
 * Created by Manhhailua on 11/25/16.
 */

class Zone {

  constructor(zone) {
    this._model = zone;
    this._id = this._model.id;
    this._width = this._model.width;
    this._height = this._model.height;
    this._placements = this._model.placements;
  }

  get model() {
    return this._model;
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
