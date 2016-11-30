/**
 * Created by Manhhailua on 11/30/16.
 */

class Entity {

  constructor(entity) {
    this._id = entity.id;
    this._width = entity.width;
    this._height = entity.height;
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

}

export default Entity;
