/**
 * Created by Manhhailua on 11/22/16.
 */

/* eslint-disable import/no-extraneous-dependencies */

class Response {

  constructor(response) {
    this._data = Object.assign({}, response.data); // Create new instance in memory
    this._zones = this._data.zones;
  }

  // Output response "response.data"
  get model() {
    return this._data;
  }

  // Output all "response.data.zones"
  get zones() {
    return this._zones;
  }

  // Find zone by array index from "response.data.zones"
  getZoneObjectByIndex(index = 0) {
    return this.zones[index];
  }

  // Find zone by id from "response.data.zones"
  getZoneObjectById(id) {
    return this.zones.find(zone => zone.id === id);
  }

}

export default Response;
