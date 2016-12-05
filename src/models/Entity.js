/**
 * Created by Manhhailua on 11/30/16.
 */

class Entity {

  constructor(entity) {
    this._id = entity.id;
    this._width = entity.width;
    this._height = entity.height;
    this._html = entity.html;
    this._css = entity.css;
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

  get html() {
    return this._html;
  }

  get css() {
    return this._css;
  }

}

export default Entity;
