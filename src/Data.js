/**
 * Created by Manhhailua on 11/22/16.
 */

class Data {

  constructor(response) {
    this._data = Object.assign({}, response.data);
    this._banners = this._data.banners;
  }

  get data() {
    return this._data;
  }

  get banners() {
    return this._banners;
  }
}

export default Data;
