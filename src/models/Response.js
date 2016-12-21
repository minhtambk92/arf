/**
 * Created by Manhhailua on 11/22/16.
 */

class Response {

  constructor(response) {
    this._data = Object.assign({}, response.data); // Create new instance in memory
    this._zones = this._data.zones;
  }

  /**
   * Output response "response.data"
   * @return {Object}
   */
  get model() {
    return this._data;
  }

  /**
   * Output all "response.data.zones"
   * @return {Array}
   */
  get zones() {
    return this._zones;
  }

  /**
   * Find zone by id from "response.data.zones"
   * @param id
   * @return {Object}
   */
  getZoneObjectById(id) {
    return this.zones.find(zone => zone.id === id);
  }

}

export default Response;
