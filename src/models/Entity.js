/**
 * Created by Manhhailua on 11/30/16.
 */

class Entity {

  constructor(entity) {
    this._id = entity.id;
    this._weight = entity.weight;
    this._type = entity.type;
    this._width = entity.width;
    this._height = entity.height;
    this._html = entity.html;
    this._css = entity.compiledCss || entity.outputCss || entity.css;
    this._cpm = entity.cpm;
  }

  get id() {
    return this._id;
  }

  get weight() {
    return this._weight;
  }

  get type() {
    return this._type;
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

  get cpm() {
    return this._cpm;
  }

}

export default Entity;
